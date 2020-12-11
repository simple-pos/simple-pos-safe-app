import React from "react"
import { FieldProps } from "formik"
import { Select } from "evergreen-ui"

type Props = { children: React.ReactElement } & FieldProps<string>

// eslint-disable-next-line
const FormikSelectWrapper = ({ field, form, children, ...rest }: Props): React.ReactElement => {
  return (
    <Select {...field} {...rest}>
      {children}
    </Select>
  )
}

export default FormikSelectWrapper
