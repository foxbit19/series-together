import { Image } from "@nextui-org/image";
import Episode from "@/components/episode";
import { ButtonGroup } from "@nextui-org/button";
import { getAuthToken } from "@/api/apiProvider";

async function get() {
  const res = await fetch('https://api4.thetvdb.com/v4/series/79824', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAuthToken()}`
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data: ' + `${res.status}`)
  }

  return await res.json()
}

async function getEpisodes() {
  const res = await fetch('https://api4.thetvdb.com/v4/series/79824/episodes/official?page=0', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAuthToken()}`
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data: ' + `${res.status}`)
  }

  return await res.json()
}

export default async function Home() {
  const series = await get()
  const episodes = await getEpisodes()
  console.log(episodes.data.episodes);


  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Image
        width={300}
        src={series.data.image}
      />
      <div className="w-screen overflow-x-scroll scrollbar-hide">
        <ButtonGroup>
          <Episode number={331} />
          <Episode number={332} />
          <Episode number={333} />
          <Episode number={334} />
          <Episode number={335} />
          <Episode number={336} />
          <Episode number={337} />
          <Episode number={338} />
          <Episode number={339} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
          <Episode number={340} />
        </ButtonGroup>
      </div>

    </section >
  );
}
