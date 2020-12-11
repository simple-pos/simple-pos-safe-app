import React from "react"
import { FieldProps } from "formik"
import { TextInputField } from "evergreen-ui"

type Props = { children?: React.ReactElement } & FieldProps<string>

// eslint-disable-next-line
const Input = ({ field, form, children, ...rest }: Props): React.ReactElement => {
  return <TextInputField {...field} {...rest} />
}

export default Input
