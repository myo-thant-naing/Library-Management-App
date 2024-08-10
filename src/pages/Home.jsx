import { Outlet } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import book from "../assets/book.png";
import BookList from "../components/BookList";

function Home() {
  return (
    <>
      <HeroSection />

      <BookList />
    </>
  );
}

export default Home;
