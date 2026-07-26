import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Scrolls to an in-page section by id if it exists on the current page,
 * otherwise navigates to the given fallback route (e.g. when a component
 * is reused on a standalone page that doesn't include that section).
 */
export function scrollToSectionOrNavigate(id: string, fallbackHref: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = fallbackHref
  }
}
