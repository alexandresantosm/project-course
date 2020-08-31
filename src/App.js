import React, { Component } from 'react';

import Course from './components/Course';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: 'React',
          category: 'JavaScript',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
        },
        {
          id: 2,
          name: 'Angular',
          category: 'JavaScript',
          image: 'https://angular.io/assets/images/logos/angular/angular.png'
        }
      ]
    };
    this.removeCourse = this.removeCourse.bind(this);
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
