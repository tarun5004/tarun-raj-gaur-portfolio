'use client';

import { useEffect, useState } from 'react';

export function FollowButton({ authorHandle }: { authorHandle: string }) {
  const [following, setFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetch(`/api/follows?authorHandle=${encodeURIComponent(authorHandle)}`)
      .then((response) => response.json())
      .then((data: { following?: boolean; followerCount?: number }) => {
        setFollowing(Boolean(data.following));
        setFollowerCount(data.followerCount || 0);
      })
      .catch(() => undefined)
      .finally(() => setPending(false));
  }, [authorHandle]);

  async function toggle() {
    const next = !following;
    setFollowing(next);
    setFollowerCount((count) => Math.max(0, count + (next ? 1 : -1)));
    setPending(true);
    try {
      const response = await fetch('/api/follows', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ authorHandle, following: next }) });
      if (!response.ok) throw new Error('Follow failed');
      const data = await response.json() as { following: boolean; followerCount: number };
      setFollowing(data.following);
      setFollowerCount(data.followerCount);
    } catch {
      setFollowing(!next);
      setFollowerCount((count) => Math.max(0, count + (next ? -1 : 1)));
    } finally {
      setPending(false);
    }
  }

  return <div className="follow-control"><button type="button" onClick={toggle} disabled={pending} aria-pressed={following}>{pending ? 'Loading...' : following ? 'Following' : 'Follow'}</button><small>{followerCount} follower{followerCount === 1 ? '' : 's'}</small></div>;
}