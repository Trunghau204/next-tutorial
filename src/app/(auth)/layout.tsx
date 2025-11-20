export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>Auth Header</p>
        </header>
        {children}
        <footer>
          <p>Auth Footer</p>
        </footer>
      </body>
    </html>
  );
}
