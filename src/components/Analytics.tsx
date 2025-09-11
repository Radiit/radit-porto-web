import { createSignal, createEffect, For } from "solid-js"

type CTAStats = {
  label: string
  clicks: number
  category: string
}

export default function Analytics() {
  const [stats, setStats] = createSignal<CTAStats[]>([])
  const [totalClicks, setTotalClicks] = createSignal(0)

  // Load analytics data from localStorage (for demo purposes)
  createEffect(() => {
    const savedStats = localStorage.getItem('cta_analytics')
    if (savedStats) {
      const data = JSON.parse(savedStats)
      setStats(data)
      setTotalClicks(data.reduce((sum: number, stat: CTAStats) => sum + stat.clicks, 0))
    }
  })

  // Function to track CTA clicks
  const trackCTAClick = (label: string, category: string = 'CTA') => {
    setStats(prev => {
      const existing = prev.find(stat => stat.label === label)
      if (existing) {
        existing.clicks += 1
      } else {
        prev.push({ label, clicks: 1, category })
      }
      
      // Save to localStorage
      localStorage.setItem('cta_analytics', JSON.stringify(prev))
      setTotalClicks(prev.reduce((sum: number, stat: CTAStats) => sum + stat.clicks, 0))
      
      return [...prev]
    })
  }

  // Make trackCTAClick available globally
  if (typeof window !== 'undefined') {
    (window as any).trackCTAClick = trackCTAClick
  }

  return (
    <div class="bg-white dark:bg-black border border-black/15 dark:border-white/20 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-black dark:text-white mb-4">
        CTA Analytics
      </h3>
      
      <div class="space-y-4">
        <div class="text-sm text-black/75 dark:text-white/75">
          Total Clicks: <span class="font-semibold text-black dark:text-white">{totalClicks()}</span>
        </div>
        
        <div class="space-y-2">
          <For each={stats()}>
            {(stat) => (
              <div class="flex justify-between items-center py-2 px-3 bg-black/5 dark:bg-white/10 rounded">
                <div>
                  <span class="text-sm font-medium text-black dark:text-white">{stat.label}</span>
                  <span class="text-xs text-black/50 dark:text-white/50 ml-2">({stat.category})</span>
                </div>
                <div class="text-sm font-semibold text-black dark:text-white">
                  {stat.clicks}
                </div>
              </div>
            )}
          </For>
        </div>
        
        {stats().length === 0 && (
          <p class="text-sm text-black/50 dark:text-white/50 italic">
            No CTA clicks tracked yet. Click some CTAs to see analytics!
          </p>
        )}
      </div>
    </div>
  )
}
