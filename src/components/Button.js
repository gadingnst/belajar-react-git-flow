import React from 'react'

class Button extends React.Component {
  static defaultProps = {
    className: '',
    text: ''
  }

  render() {
    const { className, text } = this.props
    return (
      <div className={className}>
        {text}
      </div>
    )
  }
}

export default Button
