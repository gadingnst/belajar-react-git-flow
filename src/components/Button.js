import React from 'react'

class Button extends React.Component {
  static defaultProps = {
    text: ''
  }

  render() {
    const { text } = this.props
    return (
      <button>
        {text}
      </button>
    )
  }
}

export default Button
