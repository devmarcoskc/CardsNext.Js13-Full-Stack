import Link from 'next/link'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="text-yellow-100">
          {type} seu cartão
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} e compartilhe cartões com a comunidade. Deixe
        sua imaginação tomar conta, seja positivo!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 mb-4 w-full max-w-2xl flex flex-col
        gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold
          text-base text-yellow-100">
            Seu cartão de mensagem:
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({...post, prompt: e.target.value})}
            placeholder="Digite sua mensagem aqui:"
            className="form_textarea"
            required
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold
          text-base text-yellow-100">
            Tag {``}
            <span>(#produto, #desenvolvimentoweb, #ideia)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({...post, tag: e.target.value})}
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-yellow-100 text-sm">
            Cancelar
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form