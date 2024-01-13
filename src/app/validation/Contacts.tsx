import { z } from 'zod'

{/* Esquema de validación del formulario*/}
const reg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g
export const formInfoSchema = z.object({
    name: z
    .string()
    .min(1, {message: 'The name requires at least 1 character'})
    .max(50, {message: 'the name requires a maximum of 50 characters'})
    .regex(reg, { message: 'The name can only contain letters and spaces' }),
    lastname: z
    .string()
    .min(1, {message: 'The lastname requires at least 1 character'})
    .max(50, {message: 'the lastname requires a maximum of 50 characters'})
    .regex(reg, { message: 'The lastname can only contain letters and spaces' }),
    email: z
    .string()
    .min(5, { message: 'Please insert a valid email address.' })
    .email({message: 'Please insert a valid email address.'}),

    message: z
    .string()
    .min(10, {message: 'The message requires at least 10 characters'})
    .max(500, {message: 'the message requires a maximum of 500 characters'})
 }) 