import * as readline from 'readline'
import { questions } from './questions'

// Muy en desacuerdo a Muy de acuerdo
type Answers = -3 | -2 | -1 | 0 | 1 | 2 | 3

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function takeQuestions(index: number): Promise<Answers> {
  return new Promise((resolve) => {
    console.log(`Pregunta ${index + 1}: ${questions[index].text}`)
    const options = `
      a) Muy en desacuerdo
      b) En desacuerdo
      c) Algo en desacuerdo
      d) Neutral
      e) Algo de acuerdo
      f) En acuerdo
      g) Muy de acuerdo
    `
    rl.question(
      `${options}Elige una opción (a, b, c, d, e, f, g): `,
      (input) => {
        const answer = { a: -3, b: -2, c: -1, d: 0, e: 1, f: 2, g: 3 }[
          input.toLowerCase()
        ]
        if (answer !== undefined) {
          console.log(`Elegiste: ${input} (${answer})\n`)
          resolve(answer as Answers)
        } else {
          console.log(
            'Por favor, elige una opción válida (a, b, c, d, e, f, g).',
          )
          resolve(takeQuestions(index))
        }
      },
    )
  })
}

async function applyTest() {
  let answers: Answers[] = []

  for (let i = 0; i < questions.length; i++) {
    const answer = await takeQuestions(i)
    answers.push(answer)
  }

  const typePersonality = calcPunctuation(answers)
  console.log(`Tu tipo de personalidad es: ${typePersonality}`)
  rl.close()
}

function calcPunctuation(answers: Answers[]): string {
  let punctuations = { I: 0, E: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 }

  answers.forEach((answer, index) => {
    const question = questions[index]
    const value = question.inverted ? -answer : answer
    punctuations[question.dimension] += value
  })

  let typePersonality = ''
  typePersonality += punctuations['E'] > punctuations['I'] ? 'E' : 'I'
  typePersonality += punctuations['N'] > punctuations['S'] ? 'N' : 'S'
  typePersonality += punctuations['T'] > punctuations['F'] ? 'T' : 'F'
  typePersonality += punctuations['J'] > punctuations['P'] ? 'J' : 'P'

  return typePersonality
}

applyTest()

// extrovertido(E) - introvertido(I)
// intuitivo(N) - observador(S)
// pensamiento(T) - emocional(F)
// juzgador(J) - prospeccion(P)
// asertivo - cauteloso
