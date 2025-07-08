"use client"

import { useActionState, useEffect } from "react"
import { toast } from "sonner"

import { submitWispForm } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialState = {
  message: "",
  errors: {},
  success: false,
}

export function WispLeadForm() {
  const [state, formAction, isPending] = useActionState(submitWispForm, initialState)

  useEffect(() => {
    if (state.success) {
      toast.success(state.message)
    } else if (state.message && state.errors) {
      toast.error(state.message)
    }
  }, [state])

  if (state.success) {
    return (
      <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6 text-center shadow-lg">
        <h3 className="text-xl font-semibold text-green-800">Thank You!</h3>
        <p className="mt-2 text-green-700">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="mt-6 space-y-4 rounded-lg border bg-white p-6 shadow-lg">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
          {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work Email</Label>
          <Input id="email" name="email" type="email" placeholder="john@company.com" required />
          {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" name="company" placeholder="Acme Inc." />
        {state?.errors?.company && <p className="text-sm text-red-500">{state.errors.company[0]}</p>}
      </div>
      <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600" disabled={isPending}>
        {isPending ? "Submitting..." : "Get My Free Template"}
      </Button>
      <p className="text-center text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  )
}
