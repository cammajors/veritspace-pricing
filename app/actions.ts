"use server"

import { z } from "zod"

const wispSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
})

export async function submitWispForm(
  prevState: { message: string; errors?: any; success?: boolean },
  formData: FormData,
) {
  const validatedFields = wispSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    }
  }

  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would typically:
  // 1. Save the lead to your database (e.g., using Supabase, Neon)
  // 2. Add the user to your email marketing list
  // 3. Trigger an email to be sent with the WISP template
  console.log("New lead captured:", validatedFields.data)

  return {
    success: true,
    message: "Thanks! Your free template is on its way to your inbox.",
  }
}
