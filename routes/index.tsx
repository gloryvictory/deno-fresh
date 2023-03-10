import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";
import Counter from "../islands/Counter.tsx";
import OLMap from "../islands/OLMap.tsx";

// import "https://cdn.jsdelivr.net/npm/ol@7.2.1/ol.css"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@7.2.1/ol.css" />
        <title>Map Fresh App</title>
      </Head>
      <Navigation/>
        
      <div class="mt-50 max-w-screen-md">
        <OLMap/>
      </div>
      <div class="p-4 mx-auto max-w-screen-md">
        
      
        {/* <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        /> */}
        {/* <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p> */}


        <Counter start={3} />
      </div>
    </>
  );
}
