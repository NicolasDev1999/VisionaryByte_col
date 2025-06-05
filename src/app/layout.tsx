export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VisionaryByte | Servicios de Desarrollo Web y Producción Digital</title>
        <meta
          name="description"
          content="Portafolio de VisionaryByte. Servicios profesionales en desarrollo web, programación, diseño visual y producción de contenido digital."
        />
        <meta name="keywords" content="desarrollo web, programación, contenido digital, portafolio, VisionaryByte" />
        <meta name="author" content="VisionaryByte" />
        <meta property="og:title" content="VisionaryByte | Desarrollo Web y Producción Digital" />
        <meta
          property="og:description"
          content="Explora proyectos creativos y servicios en tecnología, programación y producción de contenido con estilo profesional y futurista."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visionarybyte.com" />
        <meta property="og:image" content="/img/meta/preview.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="root" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
