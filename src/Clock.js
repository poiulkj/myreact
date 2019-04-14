import React ,{Component} from 'react';

function Format(props){
    return <div>{props.date.toLocaleTimeString()}</div>
}
    
export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }

    componentDidMount(){
       this.timer =  setInterval(() => {
            this.setState({
                date:new Date()
            })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
        
    render(){
      return(
          <div><Format date={this.state.date}/></div>
      );
    }
} 