import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 classNam="text-3xl">Welcome</h1>
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
};

export default HomePage;
