import { useEffect, useState } from 'react'
import styles from './modules/InfoText.module.scss'
import Image from 'next/image'
import mainTextData from '../mainTextData'

const InfoText = () => {
  const [display, setDisplay] = useState(false)

  const displayArticle = () => {
    const article = document.querySelector('article')
    if (article == null) return

    const triggerPoint = window.innerHeight / 3 * 2.7
    const articleTop = article.getBoundingClientRect().top
    
    if (articleTop < triggerPoint) {
      article.classList.add('show')
      setDisplay(true)
    } else {
      article.classList.remove('show')
      setDisplay(false)
    }
  }

  useEffect(() => {
    function checkScroll() {
      window.addEventListener('scroll', displayArticle)
    }
    checkScroll()
  })

  return (
    <article className={
      display ? `${styles.container} ${styles.show}`
      : styles.container
    }>
      <header>
        <h2>
          Nos engagements
        </h2>
        
        <p>
        L'association a vu le jour le 2 janvier 2017. Son activité principale se situe au 25 rue de la Lanterne, 66000 Perpignan (Grande salle de 100 m2 au 1er étage et salle attenante de 25m2 environs au rez-de-chaussée)
        </p>
        <p>
        Notre ambition s'articule autour de 5 grands axes :
        </p>
      </header>

      {mainTextData.map((item, i) => {
        return(
          <section key={i}>
          <h3>
            {item.title}
          </h3>
          <p>
            {item.content}
          </p>
          {i === 0 ? <br/> : null}
          <div className={i & 1 ? styles.imgWrapperLeft: styles.imgWrapperRight}>
            <Image
              width={item.width / 2}
              height={item.height / 1.2}
              objectFit={item.objectFit}
              src={item.src}
              alt={item.alt}
              quality={100}
              
            />
          </div>
        </section>
        )
      })}
    </article>
  )
}

export default InfoText