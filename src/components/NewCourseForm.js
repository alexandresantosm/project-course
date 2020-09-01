import React, { Component } from 'react';

class NewCourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      image: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const newCourse = this.state;

    if(newCourse.name && newCourse.category && newCourse.image) {
      this.props.onSubmit(newCourse);

      this.setState({
        name: '',
        image: ''
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { props, state } = this;
    const { name, category, image } = state;

    return (
      <form className="course-form" onSubmit={this.handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          <span>Imagem:</span>
          <input type="text" name="image" value={image} onChange={this.handleChange} />
        </label>
        <label>
          <span>Categoria:</span>
          <select name="category" value={category} onChange={this.handleChange} >
            <option value="">Selecionar</option>
            <option value="JavaScript">JavaScript</option>
            <option value="PHP">PHP</option>
            <option value="Ruby">Ruby</option>
            <option value="C#">C#</option>
            <option value="Java">Java</option>
          </select>
        </label>
        <button type="submit">Criar Curso</button>
      </form>
    ); 
  }
}

export default NewCourseForm;