const FOOTER_COLUMNS = [
  { title: 'Pages', links: ['Home', 'About us', 'Pricing', 'Features'] },
  { title: 'Explore', links: ['Work', 'Blog', 'Contact us', 'Privacy Policy'] },
]

/** Футер на тёмно-синем фоне: блок «Let's Talk!», ссылки по разделам, копирайт и соцсети. */
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page flex flex-col gap-16 py-20">
        <div className="flex flex-col gap-6 rounded-2xl bg-ink-soft p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold">Lets Talk!</h2>
            <p className="mt-2 text-white/60">Subscribe for updates from the team.</p>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full min-w-0 rounded-full bg-white/10 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none md:w-72"
            />
            <button type="submit" className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <span className="font-heading text-xl font-bold">
            <span className="text-accent">{'{'}</span>Finsweet
          </span>
          <div className="flex flex-wrap gap-16">
            {FOOTER_COLUMNS.map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-3">
                <p className="font-semibold text-white/40">{title}</p>
                {links.map((link) => (
                  <a key={link} href="#" className="text-white/80 hover:text-accent">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Finsweet. All rights reserved.</p>
          <div className="flex gap-4">
            {/* TODO: иконки соцсетей */}
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
