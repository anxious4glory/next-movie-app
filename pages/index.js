import axios from "axios"
import Hero from "../component/Hero"
import PopularMovie from "../component/PopularMovie"
import { server } from "../config"
import Link from "next/link"
import Image from "next/image"
export default function Home({ movies }) {
  console.log(movies)
  return (
    <div>
      <Hero />
      <PopularMovie movies={movies.results} />
     
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
} 