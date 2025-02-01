import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Selling",
  keywords: "property, selling, real estate",
  description: "Property selling website",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
