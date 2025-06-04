export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body id="root" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
