import './Home.css';
import { Quotes } from "./Quotes";
import { WeeklyStreak } from "./WeeklyStreak";
import { ArtistDateStart } from "./ArtistDateStart";
import { MorningPageStart } from "./MorningPageStart";


export const Home = (props) => {

  return (
    <>

      <Quotes />
      <MorningPageStart />
      <ArtistDateStart />
      <WeeklyStreak />

    </>
  )
}

