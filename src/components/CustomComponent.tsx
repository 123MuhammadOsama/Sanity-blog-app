import { PortableTextComponents } from "next-sanity";

export const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-5xl font-extrabold text-dark dark:text-light">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-4xl font-bold text-dark dark:text-light">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-3xl font-semibold text-dark dark:text-light">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-3xl font-bold text-accentDarkPrimary">{children}</h4>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="list-disc marker:text-accentDarkSecondary list-inside ml-4">
          {children}
        </li>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold text-dark dark:text-white">{children}</strong>
      ),
    },
  };
  