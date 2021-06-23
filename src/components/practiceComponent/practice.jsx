import React, { Component } from 'react'

class WillRemove extends Component {
    componentDidMount(){
        console.log('Child Mount Called')
    }

    componentWillUnmount(){
        console.log('Child unmount Called')
    }
    render() {
        return (
            <div>
                I will remove soon
            </div>
        )
    }
}

class LifeCycle extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    
    render(){
        return (
            <div onClick={()=>this.setState({count:this.state.count+1})}>
                {this.state.count}
                this is another main Lifecycle compenent
                {this.state.count<=5 &&<WillRemove/>}
                
            </div>
        )
    }
}
export default LifeCycle
