import classNames from 'classnames'
import React from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'


type Props = {
  children: React.ReactNode
  as?: Variant
  className?: string
}

const Text = ({ as: Tag = 'p', children, className, ...rest }: Props) => {

  const classes = classNames(className)
  return (
    <Tag className={classes} {...rest}>{children}</Tag>
  )
}

export default Text