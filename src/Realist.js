import React ,{Component} from 'react';

function Time(props){
    return <div>{props.date.toLocaleTimeString()}</div>
}

export default class Realist extends Component{

    constructor(props){
        super(props);
        this.state={
           date:new Date()
        }
        setInterval(() => {
            this.setState({date:new Date()});
        }, 1000);
    }
  
    render(){
       return <Time date={this.state.date} />
    }
} 