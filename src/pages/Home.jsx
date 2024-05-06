import Categories from "../features/categories/Categories"
import Hero from "../features/Home/Hero"
import TopProducts from "../features/Home/TopProducts"

function Home() {
  return (
    <div className="sec-top">
      <Hero />
      <main>
        <Categories />
        <TopProducts />
      </main>
    </div>
  );
}

export default Home