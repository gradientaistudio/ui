"use client"

import { useEffect, useRef, useState } from "react"

export interface Tab {
  label: string
  content: React.ReactNode
}

const defaultTabs: Tab[] = [
  {
    label: 'Tab 1',
    content: (
      <div>
        <h2 className="text-xl mb-2">Tab 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    ),
  },
  {
    label: 'Tab 2',
    content: (
      <div>
        <h2 className="text-xl mb-2">Tab 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    ),
  },
  {
    label: 'Tab 3',
    content: (
      <div>
        <h2 className="text-xl mb-2">Tab 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    ),
  },
]

export default function Tabs({ tabs = defaultTabs }: { tabs?: Tab[] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [visibleContentIndex, setVisibleContentIndex] = useState(0)
  const [isFading, setIsFading] = useState(true)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  function handleTabClick(index: number) {
    if (index === activeTabIndex) return
    setActiveTabIndex(index)
    setIsFading(false)
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      setVisibleContentIndex(index)
      setIsFading(true)
    }, 300)
  }

  return (
    <div className="max-w-md mx-auto text-black dark:text-white">
      <div className="mb-2 flex flex-nowrap space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer inline-block shrink-0 whitespace-nowrap rounded-full px-4 py-2 transition-all duration-300 ${
              activeTabIndex === index
                ? 'bg-black/3 dark:bg-white/10'
                : 'hover:bg-black/3 dark:hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className={`p-5 bg-black/3 rounded-3xl min-h-[120px] transition-opacity duration-300 dark:bg-white/10 ${
          isFading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {tabs[visibleContentIndex].content}
      </div>
    </div>
  )
}
