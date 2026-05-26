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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 group-hover:bg-black/40 transition-colors">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/20 group-hover:scale-110 group-hover:ring-white/40 transition-all">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-white text-sm font-semibold tracking-wide uppercase bg-black/40 px-4 py-1 rounded-full">Watch Demo</span>
      </div>
    </button>
  )
}
