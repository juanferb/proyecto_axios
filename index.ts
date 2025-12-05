import axios from 'axios'
import chalk from 'chalk'

interface Tarea {
  userId: number
  id: number
  title: string
  completed: boolean
}

// Leemos las variables del sistema
// El "|| ''" es un truco por si la variable no existe, para que no sea undefined
const URL = process.env.API_URL || ''
const USER = process.env.NOMBRE_USUARIO || 'Anónimo'

console.log(chalk.blue.bold(`👋 Hola ${USER}, conectando a la API...`))

// Verificamos que la URL exista antes de llamar
if (!URL) {
  console.error(
    chalk.red('❌ Error: No se encontró la variable API_URL en el archivo .env')
  )
  process.exit(1)
}

try {
  const respuesta = await axios.get<Tarea>(URL)
  const tarea = respuesta.data

  console.log(chalk.green('¡Datos recibidos! ✅'))
  console.log(`Título: ${chalk.yellow(tarea.title)}`)
} catch (error) {
  if (error instanceof Error) {
    console.log(chalk.red('❌ Error:'), error.message)
  }
}
