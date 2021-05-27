const places = [
  {
    title: 'Rule 2',
    description:
      `Alors que le serpent avance inexorablement, le joueur ne peut que lui indiquer une direction à suivre (en haut, en bas, à gauche, à droite) afin d'éviter que la tête du serpent ne touche les murs ou son propre corps, auquel cas il risque de mourir.`,
    imageUrl: process.env.PUBLIC_URL + '/assets/snake2.jpg',
    time: 1500,
  },
  {
    title: 'Rule 1',
    description:
      `Le joueur contrôle une longue et fine ligne semblable à un serpent, qui doit slalomer entre les bords de l'écran et les obstacles qui parsèment le niveau. Pour gagner chacun des niveaux, le joueur doit faire manger à son serpent un certain nombre de pastilles similaire à de la pomme, allongeant à chaque fois la taille du serpent.`,
    imageUrl: process.env.PUBLIC_URL + '/assets/snake1.jpg',
    time: 1500,
  },
];

export default places;
