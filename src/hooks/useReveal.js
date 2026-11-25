import { useEffect } from 'react'

/**
 * Adiciona a classe "visible" aos elementos .reveal quando entram no ecrã.
 * Executa uma única vez, após a montagem de todas as secções.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
