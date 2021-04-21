// SPA SSR SSG

import { useEffect } from "react";

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },

    //Tempo para página recarregar com dados do back
    revalidate: 60 * 60 * 8,
  };
}
