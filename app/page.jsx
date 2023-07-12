import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Crie e Compartilhe
        <br className="max-md:hidden"/>
        <span className="orange_gradient">
          Cartões de Mensagens
        </span>
      </h1>
      <p className="desc text-center">
        CardsForYou é uma "open-source" para você compartilhar seus cartões de mensagens com seus amigos
        e com a comunidade! 
      </p>

      {/*FEED*/}
      <Feed/>
    </section>
  )
}

export default Home;