import React, {Component} from 'react';

import Criteria from 'Criteria';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: [
          {
            id: 0,
            category: 'PERFORMANCE',
            criteria: ['Effort', 'Personality'],
            total: 0
          },
          {
            id: 1,
            category: 'TECHNIQUE',
            criteria: ['Transitions', 'Cleanliness', 'Execution'],
            total: 0
          },
          {
            id: 2,
            category: 'CHOREOGRAPHY',
            criteria: ['Difficulty', 'Musicality', 'Tricks'],
            total: 0
          },
          {
            id: 3,
            category: 'CREATIVITY',
            criteria: ['Originality', 'Artistic Choices', 'Dynamics'],
            total: 0
          },
          {
            id: 4,
            category: 'PRESENTATION',
            criteria: ['Crowd Appeal', 'Impact'],
            total: 0
          }
      ],
      totalScore: 0
    }
  }
  onValueChange(range, box) {
    this.state.categories[box.id].total = range;
    this.setState({
      ...this.state.categories
    })
  }
  lockInScore() {
    var avg = this.state.categories.map(x => Number(x.total)).reduce((sum, num) => { return sum + num});
    this.setState({
      totalScore: avg
    })
    // console.log(avg);
  }
  handleReset() {
    this.state.categories = this.state.categories.map(x => {
      return {
        ...x,
        total: 0
      }
    });
    this.setState({
      ...this.state.categories,
      totalScore: 0
    })
  }
  render() {
    var {categories, totalScore} = this.state;
    var lockTotal = () => {
      if(totalScore) {
        return (
          <div className='bottom-box-flex'>
            <div>Total Score:</div>
            <div>{totalScore}</div>
          </div>
        )
      } else {
        return (
          <div className='bottom-box-flex'>
            <div></div>
            <div></div>
          </div>
        )
      }
    }

    return (
      <div className='container'>
        <h1>WORLD <span>OF</span></h1>
        <h1>DANCE</h1>
        <div className='empty-box-flex'>
          <div className='empty-box'></div>
          <div className='empty-box'></div>
        </div>
        {categories.map(category => {
          return (
            <Criteria box={category} total={category.total} key={category.id} onValueChange={this.onValueChange.bind(this)}/>
          )
        })}
        <div className='flex-it'>
          <div className='reset' onClick={this.handleReset.bind(this)}>RESET</div>
          <div className='lock' onClick={this.lockInScore.bind(this)}>LOCK IN</div>
        </div>

        {lockTotal()}
      </div>
    )
  }
}
