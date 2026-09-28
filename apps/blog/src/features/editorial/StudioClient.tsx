'use client';

import { FormEvent, useEffect, useState } from 'react';

type Note = { id: string; title: string; excerpt: string; body: string; topic: string; author: string; status: 'draft' | 'published'; assetUrl: string; token: string; updatedAt: string };
const storageKey = 'tarun-notes-studio-v1';
const blank: Omit<Note, 'id' | 'token' | 'updatedAt'> = { title: '', excerpt: '', body: '', topic: 'Architecture', author: 'Tarun Raj Gaur', status: 'draft', assetUrl: '' };

export function StudioClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [form, setForm] = useState(blank);
  const [token, setToken] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) setNotes(JSON.parse(saved) as Note[]);
    } catch {
      window.localStorage.removeItem(storageKey);
      setMessage('Local notes were reset because saved data was invalid.');
    }
  }, []);

  function persist(next: Note[]) {
    setNotes(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  }

  async function uploadAsset(file: File) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !preset) return setMessage('Add Cloudinary cloud name and unsigned upload preset to apps/blog/.env.local.');
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', preset);
    setMessage('Uploading asset...');
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, { method: 'POST', body: data });
      if (!response.ok) throw new Error('Upload failed');
      const result = await response.json() as { secure_url?: string };
      if (!result.secure_url) throw new Error('Missing secure URL');
      setForm((current) => ({ ...current, assetUrl: result.secure_url! }));
      setMessage('Asset uploaded.');
    } catch {
      setMessage('Upload failed. Check the unsigned preset and file settings.');
    }
  }

  function resetForm() {
    setForm(blank);
    setToken('');
    setEditingId(null);
  }

  function submitNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.title.trim() || !form.excerpt.trim() || !form.body.trim()) return setMessage('Title, excerpt, and body are required.');
    const updatedAt = new Date().toISOString().slice(0, 10);
    if (editingId) {
      const existing = notes.find((note) => note.id === editingId);
      if (!existing || existing.token !== token) return setMessage('That edit token does not unlock this note.');
      persist(notes.map((note) => note.id === editingId ? { ...note, ...form, updatedAt } : note));
      setMessage('Note updated.');
      resetForm();
      return;
    }
    const editToken = crypto.randomUUID();
    const note: Note = { ...form, id: crypto.randomUUID(), token: editToken, updatedAt };
    persist([note, ...notes]);
    setToken(editToken);
    setForm(blank);
    setMessage('Note created. Save the token below for later edits or deletion.');
  }

  function beginEdit(note: Note) {
    const provided = window.prompt('Enter this note edit token to edit it.');
    if (provided !== note.token) return setMessage('The edit token did not match.');
    setToken(note.token);
    setEditingId(note.id);
    setForm({ title: note.title, excerpt: note.excerpt, body: note.body, topic: note.topic, author: note.author, status: note.status, assetUrl: note.assetUrl });
    setMessage(`Editing ${note.title}.`);
  }

  function deleteNote(note: Note) {
    const provided = window.prompt('Enter this note edit token to delete it.');
    if (provided !== note.token) return setMessage('The edit token did not match.');
    persist(notes.filter((item) => item.id !== note.id));
    if (editingId === note.id) resetForm();
    setMessage('Note deleted.');
  }

  return <div className="editorial-studio"><div className="editorial-studio-head"><span>{editingId ? 'Editing note' : 'Local editorial prototype'}</span><small>{notes.length} notes</small></div><form onSubmit={submitNote}><label>Title<input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="A specific idea worth sharing" /></label><label>Excerpt<textarea value={form.excerpt} onChange={(event) => setForm({ ...form, excerpt: event.target.value })} rows={3} /></label><div className="editorial-two-col"><label>Topic<input value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })} /></label><label>Author<input value={form.author} onChange={(event) => setForm({ ...form, author: event.target.value })} /></label></div><label>Body<textarea value={form.body} onChange={(event) => setForm({ ...form, body: event.target.value })} rows={10} /></label><label>Status<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as 'draft' | 'published' })}><option value="draft">Draft</option><option value="published">Published</option></select></label><label>Image or PDF<input type="file" accept="image/*,application/pdf" onChange={(event) => { const file = event.target.files?.[0]; if (file) void uploadAsset(file); }} /></label>{form.assetUrl ? <a href={form.assetUrl} target="_blank" rel="noreferrer">Attached asset</a> : null}<button type="submit">{editingId ? 'Save changes' : 'Create note'} {'->'}</button>{editingId ? <button type="button" onClick={resetForm}>Cancel edit</button> : null}{message ? <p role="status">{message}</p> : null}{token && !editingId ? <code>Save edit token: {token}</code> : null}</form><section className="editorial-records">{notes.map((note) => <article key={note.id}><span>{note.status} / {note.topic} / {note.author}</span><h2>{note.title}</h2><p>{note.excerpt}</p><button type="button" onClick={() => beginEdit(note)}>Edit with token</button><button type="button" onClick={() => deleteNote(note)}>Delete with token</button></article>)}</section></div>;
}