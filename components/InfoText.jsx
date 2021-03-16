import styles from './InfoText.module.scss'

const InfoText = () => {
  return (
    <article className={styles.container}>
      <header>
        <h2>
          Nos engagements
        </h2>
        
        <p>
        L'association a vu le jour le 2 janvier 2017. Son activité principale se situe au 25 rue de la Lanterne, 66000 Perpignan (Grande salle de 100 m2 au 1er étage et salle attenante de 30m2 environs au rez-de-chaussée)
        </p>
        <p>
        Notre ambition s'articule autour de 5 grands axes :
        </p>
      </header>

      <section>
        <h3>
        Faire que nos adhérents et nos publics s’amusent : 
        </h3>
        <p>
        Le jeu, c’est d’abord fait pour se détendre, passer un moment convivial. Un moment où les seules choses que nous recherchons sont le bien-être, la détente, les sourires. Alors évidemment, nous n’irons pas tous vers les mêmes jeux, car nous sommes tous différents. Certain(e)s se tourneront vers des jeux de réflexion, d’autres d’imagination, d’adresse pour avant tout, faire une pause ludique.
        </p>
      </section>

      <section>
        <h3>
        Créer du lien social :
        </h3>
        <p>
        Le jeu est créateur de lien social, de lien familial, de lien amical. Il est un média intéressant pour discuter avec l’autre. C’est un vecteur d’intégration qui permet aussi à une personne en situation de handicap, ou d’exclusion, de se retrouver en situation d’égalité avec l’autre. Il permet de créer des rapports intergénérationnels et de réunir autour d’une partie de cartes, d'un jeu de plateau, de stratégie, d’une planche de palets des personnes d’âges différents.
        </p>
      </section>

      <section>
        <h3>
        Développer les apprentissages :
        </h3>
        <p>
        Le jeu est indispensable au développement de l'Homme. Comme Piaget le suggère <q>Le jeu est le travail de l’enfance
        </q>. Nous pourrions ajouter aussi que <q>La vie de ce monde est un jeu d'enfants</q> (Proverbe oriental). En jouant, toute personne apprend les codes sociaux, à respecter les autres et les règles. Par les différents types de jeux, toute personne peut développer des compétences indispensables à sa vie d’adulte : apprendre à collaborer, à travailler en groupe, à communiquer, à innover, à apprendre à gérer ses émotions, respecter des règles, surmonter des situations difficiles, négocier, créer.
        </p>
      </section>

      <section>
        <h3>
        Participer à la vie du Territoire :
        </h3>
        <p>
        Seul on fait bien une chose, à plusieurs on en fait bien 10000. Autour du jeu gravitent de nombreuses idées, initiatives, projets, hommes et femmes qui souhaitent mettre leur investissement au service des autres. L'association se veut suffisamment fédératrice pour participer à la vie de la cité, à travers des animations, des manifestations ludiques et culturelles, des réflexions et actions pour faire vivre les quartiers et la politique de la ville, le patrimoine des Pyrénées-Orientales, faire connaître les institutions et trésors de notre belle et grande région, agir auprès du plus grand nombre.
        </p>
      </section>

      <section>
        <h3>
        Favoriser les partenariats :
        </h3>
        <p>
        Le jeu peut être vu de différentes façons, il apparaît sous tellement de formes différentes. Notre ambition est aussi de faire connaître d'autres associations et porteurs de projets créatifs autour du jeu, des entreprises et collectivités qui soutiennent l’univers du jeu de société. 
        </p>
      </section>
    </article>
  )
}

export default InfoText