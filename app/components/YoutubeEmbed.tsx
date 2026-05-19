'use client'
import { useState } from 'react'
import Image from 'next/image'

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&\s]+)/,
    /youtu\.be\/([^?\s]+)/,
    /youtube\.com\/embed\/([^?\s]+)/,
  ]
  for (const pattern of patterns) {
    const match = pattern.exec(url)
    if (match) return match[1]
  }
  return null
}

export default function YoutubeEmbed({ url }: { readonly url: string }) {
  const [playing, setPlaying] = useState(false)
  const id = extractYouTubeId(url)

  if (!id) return null

  if (playing) {
    return (
      <div className="relative w-full my-8 rounded-large overflow-hidden shadow-large" style={{ aspectRatio: '16/9' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      className="relative w-full my-8 rounded-large overflow-hidden shadow-large cursor-pointer group"
      style={{ aspectRatio: '16/9' }}
      onClick={() => setPlaying(true)}
    >
      <Image
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt="Watch demo video"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/25 transition-colors">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}
