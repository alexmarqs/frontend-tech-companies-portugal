export default function Footer() {
  return (
    <footer className="bg-background py-5 text-center">
      <div className="container">
        <p className="text-sm text-muted-foreground">
          Crafted with ❤️ by{" "}
          <a
            href="https://alexandremarques.io"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-[2px]"
          >
            Alexandre Marques
          </a>{" "}
          from 🇵🇹
        </p>
      </div>
    </footer>
  );
}
