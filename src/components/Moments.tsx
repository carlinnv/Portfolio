import { moments } from '../content/moments.ts'

export function Moments() {
  return (
    <>
      <p>A few things from outside work and school.</p>
      <ul className="moments">
        {moments.map((moment, index) => (
          <li key={`${moment.image.src}-${index}`}>
            <figure>
              <img
                src={moment.image.src}
                alt={moment.image.alt}
                width="400"
                height="300"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                {moment.caption}
                {moment.date && (
                  <span className="moments__date">{moment.date}</span>
                )}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  )
}
