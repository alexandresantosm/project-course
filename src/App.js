import React, { Component } from 'react';

import Course from './components/Course';
import NewCourseForm from './components/NewCourseForm';

import './App.css';

class App extends Component {

  static defaultProps = {
    onSubmit: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
    this.addCourse = this.addCourse.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
  }

  addCourse(course) {
    const { courses } = this.state;
    const newCourse = Object.assign({}, course, {id: (Date.now())}); //Adição de um campo id
    courses.push(newCourse);

    this.setState({courses});
  }

  removeCourse(courseId) {
    const { courses } = this.state;
    const courseIndex = courses.findIndex(course => course.id === courseId);

    courses.splice(courseIndex, 1);
    this.setState({ courses });
  }
  
  render() {
    const { courses } = this.state;

    return (
      <div className="App">

        <NewCourseForm onSubmit={this.addCourse}/>

        <ul className="courses-list">
          {
            courses.map(course => <Course key={course.id} course={course} onRemove={this.removeCourse} />)
          }
        </ul>

      </div>
    );
  } 
}

export default App;
