export default function Footer() {
  return (
    <footer className="bg-background py-4 text-center text-xs">
      <div className="container">
        <p className="text-muted-foreground">
          Crafted with ❤️ by{" "}
          <a
            href="https://alexandremarques.io"
            target="_blank"
            rel="noopener"
            className="underline underline-offset-[2px]"
          >
            Alexandre Marques
          </a>
        </p>
      </div>
    </footer>
  );
}
