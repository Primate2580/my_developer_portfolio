import { notFound } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/ui/Button'

export default function NotFound() {
  usePageTitle(notFound.title)
  return (
    <section className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-5 pb-16 pt-(--header-h) text-center">
      <p aria-hidden="true" className="grad-text text-[clamp(6rem,22vw,12rem)] font-extrabold leading-none">
        404
      </p>
      <h1 className="mt-4 text-4xl md:text-5xl">{notFound.title}</h1>
      <p className="mt-4 text-fg-soft">{notFound.text}</p>
      <Button to={notFound.cta.to} className="mt-8">
        {notFound.cta.label}
      </Button>
    </section>
  )
}
