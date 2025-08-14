import Hero from "../_components/Hero";

export default function Home({ params }) {
  return (
    <>
      <Hero params={params.locale} />
    </>
  );
}
