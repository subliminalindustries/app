'use client';
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
};

export default RootLayout;
