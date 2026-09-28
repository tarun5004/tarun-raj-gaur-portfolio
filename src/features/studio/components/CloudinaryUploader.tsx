'use client';

import { ChangeEvent, useState } from 'react';

type CloudinaryUploaderProps = {
  onUploaded: (url: string, type: 'image' | 'pdf') => void;
};

export function CloudinaryUploader({ onUploaded }: CloudinaryUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [state, setState] = useState('');
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  function selectFile(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0] ?? null;
    if (selected && (selected.type.startsWith('image/') || selected.type === 'application/pdf')) {
      setFile(selected);
      setState('');
    } else if (selected) {
      setFile(null);
      setState('Choose an image or PDF file.');
    }
  }

  async function upload() {
    if (!file) return setState('Choose a file first.');
    if (!cloudName || !uploadPreset) return setState('Configure the public Cloudinary variables first.');
    setState('Uploading...');
    const body = new FormData();
    body.append('file', file);
    body.append('upload_preset', uploadPreset);
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, { method: 'POST', body });
      if (!response.ok) throw new Error('Upload failed');
      const result = await response.json() as { secure_url: string; resource_type: string };
      const type = file.type === 'application/pdf' ? 'pdf' : 'image';
      onUploaded(result.secure_url, type);
      setState('Uploaded.');
    } catch {
      setState('Upload failed. Check the unsigned preset and file settings.');
    }
  }

  return <div className="media-uploader"><label>Cover image or PDF<input type="file" accept="image/*,application/pdf" onChange={selectFile} /></label><button type="button" onClick={upload}>{file ? `Upload ${file.name}` : 'Upload asset'}</button>{state ? <small role="status">{state}</small> : null}</div>;
}