import Script from "next/script";
export default function Reviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div
        className="elfsight-app-5c0fd396-b6e2-4e64-a50b-b9dc3f942e1f"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
