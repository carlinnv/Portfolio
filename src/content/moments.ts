import { publicUrl } from './publicUrl.ts'
import type { Moment } from './types.ts'

// Put photos in public/moments/ and add one object per photo.
// Write `alt` to describe what is in the photo for people who can't see it.
// Tip: resize photos to about 1200px wide before adding them so the page stays fast.
export const moments: Moment[] = [
  {
    image: {
      src: publicUrl('moments/placeholder.svg'),
      alt: 'Placeholder image of pixel-art hills under a sun',
    },
    caption: 'Placeholder caption: what was happening in this moment.',
    date: 'Season YYYY',
  },
  {
    image: {
      src: publicUrl('moments/placeholder.svg'),
      alt: 'Placeholder image of pixel-art hills under a sun',
    },
    caption: 'Placeholder caption.',
    date: 'Season YYYY',
  },
  {
    image: {
      src: publicUrl('moments/placeholder.svg'),
      alt: 'Placeholder image of pixel-art hills under a sun',
    },
    caption: 'Placeholder caption.',
  },
]
