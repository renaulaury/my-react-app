import { z } from 'zod'

export const registerSchema = z.object({
  civility: z.string({ invalid_type_error: "La civilité est obligatoire" }),

  name: z.string()
    .min(1, "Le nom est obligatoire")
    .max(50, "Le nom ne doit pas dépasser 50 caractères")
    .regex(/^[\p{L}'-]+$/u, "Le nom ne peut contenir que des lettres, des tirets et des apostrophes"),

  firstName: z.string()
    .min(1, "Le prénom est obligatoire")
    .max(50, "Le prénom ne doit pas dépasser 50 caractères")
    .regex(/^[\p{L}'-]+$/u, "Le prénom ne peut contenir que des lettres, des tirets et des apostrophes"),

  birthDate: z.string()
    .min(1, "La date de naissance est obligatoire")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "La date doit être au format AAAA-MM-JJ"),

  email: z.string()
    .min(1, "L'email est obligatoire")
    .max(255, "L'email ne doit pas dépasser 255 caractères")
    .email("L'email n'est pas valide"),

  codePostal: z.string()
    .length(5, "Le code postal doit faire 5 caractères")
    .regex(/^\d+$/, "Le code postal ne doit contenir que des chiffres"),

  city: z.string()
    .min(1, "La ville est obligatoire")
    .max(100, "La ville ne doit pas dépasser 100 caractères")
    .regex(/^[\p{L}' -]+$/u, "La ville ne peut contenir que des lettres, des espaces, des tirets et des apostrophes"),
})