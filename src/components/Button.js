import React from 'react'

class Button extends React.Component {
  static defaultProps = {
    className: ''
  }

  render() {
    const { className } = this.props
    return (
      <div className={className}>
        Buttton
      </div>
    )
  }
}

export default Button
