import React from "react"
import { FieldProps } from "formik"
import { TextInput } from "evergreen-ui"

type Props = { children?: React.ReactElement } & FieldProps<string>

// eslint-disable-next-line
const Input = ({ field, form, children, ...rest }: Props): React.ReactElement => {
  return <TextInput {...field} {...rest} />
}

export default Input
