import Link from 'next/link'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} e compartilhe cartões com a comunidade, e deixa
        sua imaginação tomar conta. 
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col
        gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold
          text-base text-gray-700">
            Seus cartões de mensagem:
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
          text-base text-gray-700">
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
          <Link href="/" className="text-gray-500 text-sm">
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