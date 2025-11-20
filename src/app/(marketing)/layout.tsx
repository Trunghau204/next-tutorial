export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
