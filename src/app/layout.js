import Head from "next/head";
import "./app.scss";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="nMmumpLhU6oMBkvrqzGJEWcvC_btwJ4okjgahmTxBxk"
        />
        <meta
          name="description"
          content="Experienced freelance full-stack developer specializing in React.js, Next.js, Express.js, Node.js, MySQL, Sequelize.js, and TypeScript. Available for hire to build scalable and efficient web applications. Contact now to discuss your project requirements. Hire Full Stack Developer today!"
        />
        <meta
          name="keywords"
          content="freelance full stack developer, full stack developer for hire, react.js developer, next.js developer, node.js developer, express.js developer, mysql developer, sequelize.js developer, typescript developer, hire full stack developer, hire developer, freelance developer"
        />
        <meta name="author" content="Thareq Muhammad Azani" />
        <title>Thareq Muhammad Azani - Web Developer</title>
      </Head>
      <body>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
