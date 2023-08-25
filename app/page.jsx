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
        CardsForYou foi feito para você compartilhar seus cartões de mensagens com a comunidade!
        Seja positivo e espalhe sua mensagem! 
      </p>
      <span className="text-red-400 text-sm mt-2">
        Devido o sistema de hospedagem do projeto ser gratuita, as funcionalidades podem demorar alguns segundos! Seja paciente.
      </span>

      {/*FEED*/}
      <Feed/>
    </section>
  )
}

export default Home;