import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-grid px-4">
      <div className="max-w-md border border-border bg-card p-10 text-center">
        <div className="mono-label text-primary">404 · route_not_found</div>
        <h1 className="mt-4 text-5xl leading-tight">This path isn&apos;t in the manifest.</h1>
        <p className="mt-3 text-sm text-muted-foreground">The page you requested doesn&apos;t exist — or hasn&apos;t been deployed yet.</p>
        <Link href="/" className="mono-label mt-6 inline-flex items-center gap-2 border border-primary bg-primary px-4 py-3 text-primary-foreground transition hover:brightness-110">← return home</Link>
      </div>
    </div>
  );
}
