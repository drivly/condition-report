import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MyLink = React.forwardRef(({ href, name, active, ...rest }, ref) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} passHref={true}>
      <a
        ref={ref}
        {...rest}
        className={`navLink ${
          asPath === href || active
            ? "text-dark-1 dark:text-gray-1"
            : "dark:text-zinc-600 text-gray-400"
        }`}>
        {name}
      </a>
    </Link>
  );
});

export default MyLink;
