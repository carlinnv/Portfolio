import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { moments } from '../content/moments.ts'
import { Card } from './Card.tsx'

/** How far (in pixels) a finger must move sideways to count as a swipe. */
const SWIPE_DISTANCE = 40

/** Length of the flip; must match the 0.5s in components.css (carousel-flip-*). */
const FLIP_MS = 500

/** The photo currently flipping away, and which way it goes. */
interface Leaving {
  index: number
  direction: 'next' | 'prev'
}

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Photo carousel: one moment at a time, with Previous/Next buttons and swipe
 * on touch screens. When the photo changes, the old one flips away like a
 * photo flicked off a pile, revealing the next one underneath. It never
 * advances on its own. Follows the WAI-ARIA carousel pattern so screen
 * readers announce "slide 2 of 5" and each caption.
 */
export function Moments() {
  const [current, setCurrent] = useState(0)
  const [leaving, setLeaving] = useState<Leaving | null>(null)
  // The new photo "settles" only after the visitor first changes slides.
  const [hasMoved, setHasMoved] = useState(false)
  const swipeStartX = useRef<number | null>(null)
  const count = moments.length

  // Safety net: remove the flipping photo even if its animation never reports
  // that it finished (e.g. the tab was in the background).
  useEffect(() => {
    if (!leaving) return
    const timer = window.setTimeout(() => setLeaving(null), FLIP_MS + 200)
    return () => window.clearTimeout(timer)
  }, [leaving])

  // Wraps around: Next on the last photo goes back to the first.
  const go = (step: number) => {
    if (!prefersReducedMotion()) {
      setLeaving({ index: current, direction: step > 0 ? 'next' : 'prev' })
    }
    setHasMoved(true)
    setCurrent((current + step + count) % count)
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') swipeStartX.current = event.clientX
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return
    const distance = event.clientX - swipeStartX.current
    swipeStartX.current = null
    if (Math.abs(distance) >= SWIPE_DISTANCE) go(distance < 0 ? 1 : -1)
  }

  return (
    <Card id="moments" title="Moments">
      <p>A few things from outside work and school.</p>
      <div
        className="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Moments photos"
      >
        <div
          id="moments-slides"
          className={
            hasMoved
              ? 'carousel__slides carousel__slides--moved'
              : 'carousel__slides'
          }
          // Announces the newly shown photo's caption to screen readers.
          aria-live="polite"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            swipeStartX.current = null
          }}
        >
          {moments.map((moment, index) => {
            const isLeaving = leaving?.index === index && index !== current
            return (
              <figure
                key={`${moment.image.src}-${index}`}
                className={
                  isLeaving
                    ? `carousel__slide carousel__slide--leaving carousel__slide--leaving-${leaving.direction}`
                    : 'carousel__slide'
                }
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                // The flipping photo is just an effect; don't announce it.
                aria-hidden={isLeaving || undefined}
                hidden={index !== current && !isLeaving}
                onAnimationEnd={
                  isLeaving
                    ? (event) => {
                        if (event.target === event.currentTarget)
                          setLeaving(null)
                      }
                    : undefined
                }
              >
                <img
                  src={moment.image.src}
                  alt={moment.image.alt}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  {moment.caption}
                  {moment.date && (
                    <span className="carousel__date">{moment.date}</span>
                  )}
                </figcaption>
              </figure>
            )
          })}
        </div>

        {count > 1 && (
          <div className="carousel__controls">
            <button
              type="button"
              className="carousel__button"
              aria-controls="moments-slides"
              onClick={() => go(-1)}
            >
              <span
                className="carousel__arrow carousel__arrow--prev"
                aria-hidden="true"
              />
              Previous
            </button>
            {/* Screen readers get this from each slide's label instead. */}
            <p className="carousel__counter" aria-hidden="true">
              {current + 1} of {count}
            </p>
            <button
              type="button"
              className="carousel__button"
              aria-controls="moments-slides"
              onClick={() => go(1)}
            >
              Next
              <span
                className="carousel__arrow carousel__arrow--next"
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </Card>
  )
}
