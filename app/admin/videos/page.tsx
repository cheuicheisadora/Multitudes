'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, X } from 'lucide-react'

interface Video {
  id: string
  title: string
  url: string
  platform: string
  category: string
  thumbnail: string | null
  publishedAt: string
}

const CATEGORIES = [
  'Análises rápidas',
  'Pesquisas eleitorais',
  'Debates',
  'Monitoramento de redes',
  'Cenário político',
  'Comentários da semana',
]

async function fetchVideos(): Promise<Video[]> {
  const res = await fetch('/api/videos')
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

async function createVideo(data: Omit<Video, 'id' | 'publishedAt'>): Promise<Video> {
  const res = await fetch('/api/videos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

async function deleteVideo(id: string): Promise<void> {
  const res = await fetch(`/api/videos/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed')
}

export default function AdminVideosPage() {
  const queryClient = useQueryClient()
  const [showForm, setShowForm] = useState(false)

  const { data: videos = [], isLoading } = useQuery({ queryKey: ['admin-videos'], queryFn: fetchVideos })

  const createMutation = useMutation({
    mutationFn: createVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-videos'] })
      setShowForm(false)
      toast.success('Vídeo adicionado!')
    },
    onError: () => toast.error('Erro ao adicionar vídeo.'),
  })

  const deleteMutation = useMutation({
    mutationFn: deleteVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-videos'] })
      toast.success('Vídeo removido.')
    },
    onError: () => toast.error('Erro ao remover vídeo.'),
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      url: (form.elements.namedItem('url') as HTMLInputElement).value,
      platform: (form.elements.namedItem('platform') as HTMLSelectElement).value,
      category: (form.elements.namedItem('category') as HTMLSelectElement).value,
      thumbnail: (form.elements.namedItem('thumbnail') as HTMLInputElement).value || undefined,
    }
    createMutation.mutate(data as Parameters<typeof createVideo>[0])
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Vídeos</h1>
          <p className="text-sm text-muted-foreground mt-1">{videos.length} vídeo(s)</p>
        </div>
        <Button onClick={() => setShowForm(true)} disabled={showForm}>
          <Plus className="h-4 w-4" />
          Novo vídeo
        </Button>
      </div>

      {/* Add form */}
      {showForm && (
        <div className="mb-8 rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">Adicionar vídeo</h2>
            <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input id="title" name="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="url">URL *</Label>
              <Input id="url" name="url" type="url" required placeholder="https://youtube.com/watch?v=..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="platform">Plataforma *</Label>
              <select
                id="platform"
                name="platform"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="youtube">YouTube</option>
                <option value="tiktok">TikTok</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Categoria *</Label>
              <select
                id="category"
                name="category"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="thumbnail">Thumbnail URL (opcional)</Label>
              <Input id="thumbnail" name="thumbnail" type="url" placeholder="https://..." />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" disabled={createMutation.isPending}>
                {createMutation.isPending ? 'Salvando...' : 'Salvar vídeo'}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* List */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-muted-foreground">Carregando...</div>
        ) : videos.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">Nenhum vídeo cadastrado.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                {['Título', 'Plataforma', 'Categoria', 'Data', 'Ações'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {videos.map((video) => (
                <tr key={video.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-medium text-foreground">{video.title}</td>
                  <td className="px-4 py-3 text-muted-foreground capitalize">{video.platform}</td>
                  <td className="px-4 py-3 text-muted-foreground">{video.category}</td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {new Date(video.publishedAt).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => {
                        if (confirm('Remover este vídeo?')) deleteMutation.mutate(video.id)
                      }}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                      disabled={deleteMutation.isPending}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
