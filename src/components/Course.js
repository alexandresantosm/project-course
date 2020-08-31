import React, { Component } from 'react';

class Course extends Component {
  static defaultProps = {
    course: {},
    onRemove: () => {}
  }

  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const { id } = this.props.course; 

    this.props.onRemove(id);
  }

  render() {
    const { course } = this.props;
    const { category, image, name} = course;
    return(
      <li className="course">
        <div>{category}</div>
        <button onClick={this.handleRemove}>X</button>
        <img src={image} alt={"Logo " + name} />
        <div>{name}</div>
      </li>
    );
  }
}

export default Course;