'use client';

import { FormEvent, useEffect, useState } from 'react';

type Note = { id: string; title: string; excerpt: string; body: string; topic: string; author: string; status: 'draft' | 'published'; assetUrl: string; token: string; updatedAt: string };
const storageKey = 'tarun-notes-studio-v1';

export function StudioClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');
  const [topic, setTopic] = useState('Architecture');
  const [author, setAuthor] = useState('Tarun Raj Gaur');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [assetUrl, setAssetUrl] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setNotes(JSON.parse(saved) as Note[]);
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
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, { method: 'POST', body: data });
    if (!response.ok) return setMessage('Upload failed. Check the unsigned preset.');
    const result = await response.json() as { secure_url: string };
    setAssetUrl(result.secure_url);
    setMessage('Asset uploaded.');
  }

  function createNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !excerpt.trim() || !body.trim()) return setMessage('Title, excerpt, and body are required.');
    const editToken = crypto.randomUUID();
    const note: Note = { id: crypto.randomUUID(), title, excerpt, body, topic, author, status, assetUrl, token: editToken, updatedAt: new Date().toISOString().slice(0, 10) };
    persist([note, ...notes]);
    setToken(editToken);
    setTitle('');
    setExcerpt('');
    setBody('');
    setAssetUrl('');
    setMessage('Note created. Save the token below for later edits or deletion.');
  }

  function deleteNote(note: Note) {
    const provided = window.prompt('Enter this note edit token to delete it.');
    if (provided !== note.token) return setMessage('The edit token did not match.');
    persist(notes.filter((item) => item.id !== note.id));
    setMessage('Note deleted.');
  }

  return <div className="editorial-studio"><div className="editorial-studio-head"><span>Local editorial prototype</span><small>{notes.length} notes</small></div><form onSubmit={createNote}><label>Title<input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="A specific idea worth sharing" /></label><label>Excerpt<textarea value={excerpt} onChange={(event) => setExcerpt(event.target.value)} rows={3} /></label><div className="editorial-two-col"><label>Topic<input value={topic} onChange={(event) => setTopic(event.target.value)} /></label><label>Author<input value={author} onChange={(event) => setAuthor(event.target.value)} /></label></div><label>Body<textarea value={body} onChange={(event) => setBody(event.target.value)} rows={10} /></label><label>Status<select value={status} onChange={(event) => setStatus(event.target.value as 'draft' | 'published')}><option value="draft">Draft</option><option value="published">Published</option></select></label><label>Image or PDF<input type="file" accept="image/*,application/pdf" onChange={(event) => { const file = event.target.files?.[0]; if (file) void uploadAsset(file); }} /></label>{assetUrl ? <a href={assetUrl} target="_blank" rel="noreferrer">Attached asset</a> : null}<button type="submit">Create note {'->'}</button>{message ? <p role="status">{message}</p> : null}{token ? <code>Save edit token: {token}</code> : null}</form><section className="editorial-records">{notes.map((note) => <article key={note.id}><span>{note.status} / {note.topic} / {note.author}</span><h2>{note.title}</h2><p>{note.excerpt}</p><button type="button" onClick={() => deleteNote(note)}>Delete with token</button></article>)}</section></div>;
}