import React, {Component} from 'react';

export default class Criteria extends Component {
  handleChange() {
    console.log('Range:', this.refs.score.value, 'ID:', this.props.box.id);
    this.props.onValueChange(this.refs.score.value, this.props.box);
  }
  render() {
    var {box, total} = this.props;
    return (
      <div className='criteria-box'>
        <p className='category'>{box.category}</p>
        <input type='range' min='0' max='20' value={total} ref='score' onChange={this.handleChange.bind(this)}/>
        <p className='score'>{total}</p>
        <ul>
          {box.criteria.map(x => {
            return (
              <li>{x}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
