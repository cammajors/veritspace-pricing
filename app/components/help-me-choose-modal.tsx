"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface HelpMeChooseModalProps {
  isOpen: boolean
  onClose: () => void
  onRecommend: (planId: string) => void
}

// Simplified quiz questions
const quizQuestions = [
  {
    id: "q1",
    text: "What is your primary IT concern?",
    options: [
      { label: "Basic secure hosting", value: "basic_security" },
      { label: "Performance and scalability", value: "performance" },
      { label: "A fully managed, hands-off IT solution", value: "fully_managed" },
    ],
  },
  {
    id: "q2",
    text: "Which software is most critical to your workflow?",
    options: [
      { label: "Standard software like QuickBooks, Drake", value: "standard_software" },
      { label: "Demanding software like UltraTax or Lacerte", value: "demanding_software" },
    ],
  },
]

export default function HelpMeChooseModal({ isOpen, onClose, onRecommend }: HelpMeChooseModalProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // Simple recommendation logic
      if (answers.q1 === "fully_managed") {
        onRecommend("complete")
      } else if (answers.q2 === "demanding_software" || answers.q1 === "performance") {
        onRecommend("pro")
      } else {
        onRecommend("core")
      }
      onClose()
      // Reset for next time
      setAnswers({})
      setCurrentQuestionIndex(0)
    }
  }

  const currentQuestion = quizQuestions[currentQuestionIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-brand-medium border-brand-light text-white">
        <DialogHeader>
          <DialogTitle>Let's Find Your Perfect Plan</DialogTitle>
          <DialogDescription className="text-gray-400">
            Answer a few quick questions to get a personalized recommendation.
          </DialogDescription>
        </DialogHeader>

        {currentQuestion && (
          <div className="my-4">
            <p className="font-semibold mb-3">{currentQuestion.text}</p>
            <RadioGroup
              value={answers[currentQuestion.id]}
              onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
            >
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`${currentQuestion.id}-${option.value}`}
                    className="border-gray-500 text-brand-accent data-[state=checked]:border-brand-accent"
                  />
                  <Label htmlFor={`${currentQuestion.id}-${option.value}`} className="text-gray-300">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="text-gray-300 border-gray-500 hover:bg-brand-light bg-transparent"
          >
            Cancel
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion?.id]}
            className="bg-brand-accent text-brand-dark hover:bg-brand-accent-hover"
          >
            {currentQuestionIndex < quizQuestions.length - 1 ? "Next" : "Get Recommendation"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
