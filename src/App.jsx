import { CustomerReview, Hero, SpecialOffer, SuperQuality, Services, PopularProducts, Subscribe, Footer } from './sections'

import Nav from './components/Nav'

// /> const App = () => {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
const App = () => (
  <main className="relative">

    <Nav />

    <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>

    <section className="padding"><PopularProducts /></section>

    <section className="padding"><SuperQuality /></section>

    <section className="padding-x py-10"><Services /></section>

    <section className="padding"><SpecialOffer /></section>


    <section className="padding bg-pale-blue"><CustomerReview /></section>


    <section className="padding-x sm:py-32 py-16 w-full "><Subscribe /></section>


    <section className="padding"><Footer /></section>

  </main>
)

export default App