export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Mohammed Abd Al Rahman Himedan. All rights reserved.
        </p>
        <a
          href="#home"
          className="text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
