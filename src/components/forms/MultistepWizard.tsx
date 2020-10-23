import React, { useState } from "react"
import { Form, Formik, FormikHelpers } from "formik"

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.

type OwnProps<V> = {
  children: React.ReactChildren
  initialValues: V
  onSubmit: (values: V, bag: FormikHelpers<V>) => void | Promise<void>
}

const Wizard = <V extends Record<string, unknown>>({
  children,
  initialValues,
  onSubmit,
}: OwnProps<V>): React.ReactElement => {
  const [stepNumber, setStepNumber] = useState(0)
  const steps = React.Children.toArray(children) as React.ReactElement[]
  const [snapshot, setSnapshot] = useState(initialValues)

  const step = steps[stepNumber]
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps - 1

  const next = (values: V) => {
    setSnapshot(values)
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1))
  }

  const previous = (values: V) => {
    setSnapshot(values)
    setStepNumber(Math.max(stepNumber - 1, 0))
  }

  const handleSubmit = async (values: V, bag: FormikHelpers<V>) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag)
    }

    if (isLastStep) {
      return onSubmit(values, bag)
    } else {
      bag.setTouched({})
      next(values)
    }
  }

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <p>
            Step {stepNumber + 1} of {totalSteps}
          </p>
          {step}
          <div style={{ display: "flex" }}>
            {stepNumber > 0 && (
              <button onClick={() => previous(formik.values)} type="button">
                Back
              </button>
            )}
            <div>
              <button disabled={formik.isSubmitting} type="submit">
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </div>
          å
        </Form>
      )}
    </Formik>
  )
}

export const WizardStep = ({ children }: { children: React.ReactNode }): React.ReactNode => children

export default Wizard
