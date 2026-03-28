// metodo do React
import { useState } from 'react'
//import do css
import styles from './App.module.css'
//import dos componentes internos
import { Card } from './components/card'
// import das imagens
import cardImg1 from '/card1.jpg'
import cardImg2 from '/card2.jpg'
import cardImg3 from '/card3.jpg'


function App() {
  const [nome, setNome] = useState("")
  const [assunto, setAssunto] = useState("")

  const enviar = () => {
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/55***********?text=${msg}`)
  }

  return (
    <>
      <nav>
        <a href="#s1">Primeira</a>
        <a href="#s2">Segunda</a>
        <a href="#s3">Terceira</a>
        <a href="#s4">Quarta</a>
    </nav>

    <main>
        <section id="s1" className={styles.s1}>
            <div className={styles.imgSide}>
                <img src="/pic.png" alt="Perfil" />
            </div>

            <div className={styles.textSide}>
                <h1>Lucas</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque mollitia esse soluta quibusdam labore veritatis tenetur magnam consequuntur quis illo dolorem rerum, a earum, reprehenderit iure eum incidunt id nam?</p>
            </div>
        </section>
        <section id="s2" className={styles.s2}>
              <Card imgSrc={cardImg1} alt="Card 1" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod placeat neque esse deserunt dicta laboriosam necessitatibus, ullam beatae maiores non rem eligendi velit praesentium explicabo ipsam. Eos, totam consectetur." title="Card 1" />
              <Card imgSrc={cardImg2} alt="Card 2" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod placeat neque esse deserunt dicta laboriosam necessitatibus, ullam beatae maiores non rem eligendi velit praesentium explicabo ipsam. Eos, totam consectetur." title="Card 2" />
              <Card imgSrc={cardImg3} alt="Card 3" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod placeat neque esse deserunt dicta laboriosam necessitatibus, ullam beatae maiores non rem eligendi velit praesentium explicabo ipsam. Eos, totam consectetur." title="Card 3" />
        </section>

        <section id="s3" className={styles.s3}>
          <div className={styles.cardArea}>
            <div className={styles.wrapper}>
                <div className={styles.cardS3}>
                    <div className={styles.boxArea}>
                        <div className={styles.box}>
                            <img src="/s3-1.jpg" alt="Card 1 do s3" />
                            <div className={styles.textCard}>
                                <h3>Card 1</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat quam vero odio commodi non dolorum officia. Iste dignissimos harum facere, quaerat consectetur non expedita quidem rem totam, ex voluptates.</p>
                                <a href="#s1">Ir para o s1</a>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <img src="/s3-2.jpg" alt="Card 2 do s3" />
                            <div className={styles.textCard}>
                                <h3>Card 2</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat quam vero odio commodi non dolorum officia. Iste dignissimos harum facere, quaerat consectetur non expedita quidem rem totam, ex voluptates.</p>
                                <a href="#s2">Ir para o s2</a>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <img src="/s3-3.jpg" alt="Card 3 do s3" />
                            <div className={styles.textCard}>
                                <h3>Card 3</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat quam vero odio commodi non dolorum officia. Iste dignissimos harum facere, quaerat consectetur non expedita quidem rem totam, ex voluptates.</p>
                                <a href="#s4">Ir para o s4</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section id="s4" className={styles.s4}>
            <h2>Contato</h2>
            <div className={styles.formulario}>
                <label htmlFor="nome">Nome</label>
                <input value={nome} onChange={(event) => setNome(event.target.value)} type="text" id="nome" placeholder="Insira seu nome" />
                <label htmlFor="assunto">Mensagem</label>
                <textarea value={assunto} onChange={(event) => setAssunto(event.target.value)} id="assunto" placeholder="Insira sua mensagem"></textarea>
                <button className={styles.btn} onClick={enviar}>Enviar</button>
            </div>
        </section>
    </main>

    <footer>
        <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Lucas-RibeiroSilva" target="_blank">
            <i className="fa-brands fa-github"></i>
        </a>
    </footer>
    </>
  )
}

export default App
