import React, { useState } from "react"
import { Form, Formik, FormikHelpers } from "formik"
import { Pane, Button, Heading } from "evergreen-ui"
import styled from "styled-components"

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.

const SForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

type OwnProps<V> = {
  children: React.ReactNode
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
    <Formik initialValues={snapshot} onSubmit={handleSubmit}>
      {(formik) => {
        const stepWithProps = React.cloneElement(step, { values: formik.values })

        return (
          <SForm>
            <Pane display="flex" width="100%" height={40} justifyContent="flex-start">
              <Heading size={600}>
                Step {stepNumber + 1} of {totalSteps}
              </Heading>
            </Pane>
            {stepWithProps}
            <Pane
              display="flex"
              width="100%"
              justifyContent="flex-end"
              padding={16}
              borderBottomLeftRadius={3}
              borderBottomRightRadius={3}
            >
              <Pane>
                {stepNumber > 0 && (
                  <Button marginRight={16} onClick={() => previous(formik.values)} type="button">
                    Previous
                  </Button>
                )}
                <Button appearance="primary" disabled={formik.isSubmitting} type="submit">
                  {isLastStep ? "Submit" : "Next"}
                </Button>
              </Pane>
            </Pane>
          </SForm>
        )
      }}
    </Formik>
  )
}

export const WizardStep = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}): React.ReactElement => <>{children}</>

export default Wizard
