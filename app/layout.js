import "./globals.css";

export const metadata = {
  title: "复旦大学介绍",
  description: "复旦大学中文单页面介绍网站，包含学校概览、校区、历史、学科科研与校园生活。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
