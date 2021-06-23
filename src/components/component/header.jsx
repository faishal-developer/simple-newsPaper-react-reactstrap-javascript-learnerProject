import React, { Component } from 'react'
import {newsCategory} from './news/indexNews'

class Header extends Component {
    state={
        searchTerm:''
    }

    handleChange=(e)=>{
        this.setState({searchTerm:e.target.value})
    }

    handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.props.search(this.state.searchTerm)
        }
    }

    render() {
        const {category}=this.props
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight:'300'}}>
                    Block Buster Headlines
                </h1>
                <input 
                    ref={this.props.innerRef}
                    type='search'
                    className='form-control'
                    placeholder='Type & Press Enter for Search'
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className='my-4'>
                    {newsCategory && Object.keys(newsCategory).map(item=>{
                        if(category===newsCategory[item]){
                            return (
                                <button className='btn btn-sm btn-warning'>
                                    {`#${newsCategory[item]}`}
                                </button>
                            )
                        }
                        return(
                            <button onClick={()=>this.props.changeCategory(newsCategory[item])} className='btn btn-sm btn-light'>
                                {`#${newsCategory[item]}`}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default React.forwardRef((props,ref)=><Header innerRef={ref} {...props}/>)

 
