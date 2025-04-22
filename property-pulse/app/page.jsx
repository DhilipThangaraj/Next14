import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-2xl">
      <h1 className="text-3xl">Welcome</h1>
      <Link
        href={{
          pathname: "/properties",
          query: {
            name: "test",
          },
        }}
      >
        Go to properties
      </Link>
    </div>
  );
}
