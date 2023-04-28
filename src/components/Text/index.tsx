import { Typography, TypographyProps } from "@mui/material"

export function Text({ children, paddingTop, color = "#454545", fontSize = 16, ...rest }: TypographyProps) {
  return (
    <Typography {...rest} paddingTop={paddingTop} color={color} fontSize={fontSize}>
      {children}
    </Typography>
  )
}
