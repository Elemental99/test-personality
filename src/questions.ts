interface Question {
  text: string
  dimension: 'I' | 'E' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P'
  inverted: boolean
}

export const questions: Question[] = [
  {
    text: '1. Haces nuevos amigos con regularidad',
    dimension: 'E',
    inverted: false,
  },
  {
    text: '2. Dedicas gran parte de tu tiempo libre a explorar temas aleatorios que despiertan tu interés',
    dimension: 'N',
    inverted: false,
  },
  {
    text: '3. Ver llorar a otras personas puede hacer que sientas ganas de llorar tú también',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '4. Sueles hacer un plan de reserva para un plan de reserva',
    dimension: 'J',
    inverted: false,
  },
  {
    text: '5. Sueles mantener la calma, incluso bajo mucha presión',
    dimension: 'I',
    inverted: false,
  },
  {
    text: '6. En los actos sociales, rara vez intentas presentarte a gente nueva y sueles hablar con los que ya conoces',
    dimension: 'I',
    inverted: false,
  },
  {
    text: '7. Te gusta más seguir a tu cabeza que a tu corazón',
    dimension: 'T',
    inverted: false,
  },
  {
    text: '8. Sueles preferir hacer lo que te apetece en cada momento en lugar de planificar una rutina diaria concreta',
    dimension: 'P',
    inverted: false,
  },
  {
    text: '9. Rara vez te preocupas por causar una buena impresión a las personas que conoces',
    dimension: 'I',
    inverted: true,
  },
  {
    text: '10. Te gusta participar en actividades de grupo',
    dimension: 'E',
    inverted: false,
  },
  {
    text: '11. Te gustan los libros y las películas que te hacen pensar en tu propia interpretación del final',
    dimension: 'N',
    inverted: false,
  },
  {
    text: '12. Tu felicidad proviene más de ayudar a los demás a conseguir cosas que de tus propios logros',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '13. Te interesan tantas cosas que te resulta difícil elegir qué probar a continuación',
    dimension: 'P',
    inverted: false,
  },
  {
    text: '14. Eres propenso a preocuparte de que las cosas empeoren',
    dimension: 'J',
    inverted: true,
  },
  {
    text: '15. Evitas el liderazgo en grupos',
    dimension: 'I',
    inverted: false,
  },
  {
    text: '16. No eres una persona artística',
    dimension: 'S',
    inverted: true,
  },
  {
    text: '17. Crees que el mundo sería mejor si la gente se basara más en la racionalidad y menos en sus sentimientos',
    dimension: 'T',
    inverted: false,
  },
  {
    text: '18. Prefieres hacer tus tareas antes de permitirte relajarte',
    dimension: 'J',
    inverted: false,
  },
  {
    text: '19. Te gusta ver discutir a la gente',
    dimension: 'E',
    inverted: true,
  },
  {
    text: '20. Tiendes a evitar llamar la atención',
    dimension: 'I',
    inverted: false,
  },
  {
    text: '21. Tu humor puede cambiar muy rápidamente',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '22. Pierdes la paciencia con las personas que no son tan eficientes como tú',
    dimension: 'J',
    inverted: false,
  },
  {
    text: '23. A menudo acabas haciendo las cosas en el último momento',
    dimension: 'P',
    inverted: false,
  },
  {
    text: '24. Siempre te ha fascinado la cuestión de qué ocurre después de la muerte, si es que ocurre algo',
    dimension: 'N',
    inverted: false,
  },
  {
    text: '25. Sueles preferir estar rodeado de otros que solo',
    dimension: 'E',
    inverted: false,
  },
  {
    text: '26. Te aburres o pierdes el interés cuando la discusión se vuelve muy teórica',
    dimension: 'S',
    inverted: false,
  },
  {
    text: '27. Te resulta fácil empatizar con una persona cuyas experiencias son muy diferentes de las tuyas',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '28. Sueles aplazar la toma de decisiones el mayor tiempo posible',
    dimension: 'P',
    inverted: false,
  },
  {
    text: '29. Rara vez reconsideras las decisiones que has tomado',
    dimension: 'J',
    inverted: true,
  },
  {
    text: '30. Después de una semana larga y agotadora, un acto social animado es justo lo que necesitas',
    dimension: 'E',
    inverted: false,
  },
  {
    text: '31. Te gusta ir a museos de arte',
    dimension: 'S',
    inverted: false,
  },
  {
    text: '32. Te cuesta comprender los sentimientos de los demás',
    dimension: 'T',
    inverted: false,
  },
  {
    text: '33. Te gusta tener una lista de tareas para cada día',
    dimension: 'J',
    inverted: false,
  },
  {
    text: '34. Rara vez te sientes inseguro',
    dimension: 'T',
    inverted: true,
  },
  {
    text: '35. Evitas llamar por teléfono',
    dimension: 'I',
    inverted: false,
  },
  {
    text: '36. Sueles pasar mucho tiempo intentando comprender puntos de vista muy diferentes a los tuyos',
    dimension: 'N',
    inverted: false,
  },
  {
    text: '37. En tu círculo social, sueles ser tú quien contacta con tus amigos e inicia las actividades',
    dimension: 'E',
    inverted: false,
  },
  {
    text: '38. Si tus planes se ven interrumpidos, tu máxima prioridad es retomarlos lo antes posible',
    dimension: 'J',
    inverted: false,
  },
  {
    text: '39. Todavía te molestan los errores que cometiste hace mucho tiempo',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '40. Rara vez contemplas las razones de la existencia humana o el sentido de la vida',
    dimension: 'S',
    inverted: true,
  },
  {
    text: '41. Tus emociones te controlan más que tú a ellas',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '42. Te cuidas mucho de no hacer quedar mal a la gente, incluso cuando es completamente culpa suya',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '43. Tu estilo personal de trabajo se acerca más a las explosiones espontáneas de energía que a los esfuerzos organizados y constantes',
    dimension: 'P',
    inverted: false,
  },
  {
    text: '44. Cuando alguien tiene una buena opinión de ti, te preguntas cuánto tardará en sentirse decepcionado contigo',
    dimension: 'I',
    inverted: false,
  },
  {
    text: '45. Te encantaría un trabajo en el que tuvieras que trabajar solo la mayor parte del tiempo',
    dimension: 'I',
    inverted: false,
  },
  {
    text: '46. Crees que reflexionar sobre cuestiones filosóficas abstractas es una pérdida de tiempo',
    dimension: 'S',
    inverted: false,
  },
  {
    text: '47. Te sientes más atraído por lugares con ambientes bulliciosos y ajetreados que por lugares tranquilos e íntimos',
    dimension: 'E',
    inverted: false,
  },
  {
    text: '48. Sabes a primera vista cómo se siente una persona',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '49. A menudo te sientes abrumado',
    dimension: 'N',
    inverted: true,
  },
  {
    text: '50. Completas las cosas metódicamente sin saltarte ningún paso',
    dimension: 'J',
    inverted: false,
  },
  {
    text: '51. Te intrigan mucho las cosas tachadas de controvertidas',
    dimension: 'N',
    inverted: false,
  },
  {
    text: '52. Dejarías pasar una buena oportunidad si pensaras que otra persona la necesita más',
    dimension: 'F',
    inverted: false,
  },
  {
    text: '53. Te cuesta cumplir los plazos',
    dimension: 'P',
    inverted: false,
  },
  {
    text: '54. Confías en que las cosas te saldrán bien',
    dimension: 'P',
    inverted: false,
  },
]
