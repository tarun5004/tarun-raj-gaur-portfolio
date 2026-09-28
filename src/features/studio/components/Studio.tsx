'use client';

import { FormEvent, useEffect, useState } from 'react';
import { createSlug, readStudioPosts, writeStudioPosts } from '@/features/studio/data/storage';
import type { StudioPost, StudioStatus } from '@/features/studio/data/studioTypes';
import { SiteHeader } from '@/shared/components/SiteHeader';

const emptyDraft = { title: '', excerpt: '', topic: 'Architecture', author: 'Tarun Raj Gaur', body: '', status: 'draft' as StudioStatus };

export function Studio() {
  const [posts, setPosts] = useState<StudioPost[]>([]);
  const [form, setForm] = useState(emptyDraft);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tokenInput, setTokenInput] = useState('');
  const [activeToken, setActiveToken] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => setPosts(readStudioPosts()), []);

  function resetForm() {
    setForm(emptyDraft);
    setEditingId(null);
    setTokenInput('');
    setActiveToken('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.title.trim() || !form.excerpt.trim() || !form.body.trim()) {
      setNotice('Title, excerpt, and body are required.');
      return;
    }
    const now = new Date().toISOString().slice(0, 10);
    if (editingId) {
      const existing = posts.find((post) => post.id === editingId);
      if (!existing || activeToken !== existing.token) {
        setNotice('That edit token does not unlock this note.');
        return;
      }
      const updated = posts.map((post) => post.id === editingId ? { ...post, ...form, slug: createSlug(form.title), updatedAt: now } : post);
      setPosts(updated);
      writeStudioPosts(updated);
      setNotice('Note updated.');
      return;
    }
    const token = crypto.randomUUID();
    const post: StudioPost = { ...form, id: crypto.randomUUID(), slug: createSlug(form.title), token, createdAt: now, updatedAt: now };
    const next = [post, ...posts];
    setPosts(next);
    writeStudioPosts(next);
    setActiveToken(token);
    setNotice('Note created. Save this token to edit or delete it later.');
    setForm(emptyDraft);
  }

  function beginEdit(post: StudioPost) {
    if (tokenInput !== post.token) {
      setNotice('Enter the note token before editing.');
      return;
    }
    setEditingId(post.id);
    setActiveToken(post.token);
    setForm({ title: post.title, excerpt: post.excerpt, topic: post.topic, author: post.author, body: post.body, status: post.status });
    setNotice(`Editing ${post.title}.`);
  }

  function removePost(post: StudioPost) {
    if (tokenInput !== post.token || !window.confirm(`Delete ${post.title}?`)) {
      setNotice('Enter the correct note token to delete it.');
      return;
    }
    const next = posts.filter((item) => item.id !== post.id);
    setPosts(next);
    writeStudioPosts(next);
    if (editingId === post.id) resetForm();
    setNotice('Note deleted.');
  }

  return <main className="studio-page"><div className="page-shell"><SiteHeader /><section className="studio-intro"><p className="eyebrow">Editorial Studio / local prototype</p><h1>Write, edit, publish.</h1><p>This workspace stores notes in this browser and uses a per-note token for mutations. It is a product prototype, not production authentication.</p></section><div className="studio-layout"><form className="studio-form" onSubmit={handleSubmit}><div className="studio-form-head"><span>{editingId ? 'Editing note' : 'New note'}</span>{editingId ? <button type="button" onClick={resetForm}>Cancel</button> : null}</div><label>Title<input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="A specific idea worth sharing" /></label><label>Excerpt<textarea value={form.excerpt} onChange={(event) => setForm({ ...form, excerpt: event.target.value })} placeholder="What will the reader understand after this?" rows={3} /></label><div className="studio-two-col"><label>Topic<input value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })} /></label><label>Author<input value={form.author} onChange={(event) => setForm({ ...form, author: event.target.value })} /></label></div><label>Body<textarea className="studio-body-input" value={form.body} onChange={(event) => setForm({ ...form, body: event.target.value })} placeholder="Write the note. Markdown support is the next production step." rows={12} /></label><label>Status<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as StudioStatus })}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></label><button className="button button-dark" type="submit">{editingId ? 'Save changes' : 'Create note'} <span aria-hidden="true">↗</span></button>{notice ? <p className="studio-notice" role="status">{notice}</p> : null}{activeToken && !editingId ? <div className="token-reveal"><span>Your edit token</span><code>{activeToken}</code><small>Copy it now. This prototype cannot recover it securely.</small></div> : null}</form><section className="studio-list"><div className="studio-list-head"><p className="eyebrow">Your local notes</p><span>{posts.length} total</span></div>{posts.length === 0 ? <p className="studio-empty">Nothing here yet. Create the first note.</p> : posts.map((post) => <article className="studio-record" key={post.id}><div><span>{post.status} / {post.topic}</span><h2>{post.title}</h2><p>{post.excerpt}</p></div><div className="studio-record-actions"><input value={tokenInput} onChange={(event) => setTokenInput(event.target.value)} placeholder="Edit token" aria-label={`Edit token for ${post.title}`} /><button type="button" onClick={() => beginEdit(post)}>Edit</button><button type="button" onClick={() => removePost(post)}>Delete</button></div></article>)}</section></div></div></main>;
}