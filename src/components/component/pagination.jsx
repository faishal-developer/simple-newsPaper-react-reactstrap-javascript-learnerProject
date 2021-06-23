import React, { Component } from 'react'

class Pagination extends Component {
    state={
        isEditable:false
    }
    render() {
        const {goToPage,handlePageChange,isPrevious,totalPage,isNext,next,prev,currentPage}=this.props

        return (
            <div className='d-flex my-5 align-items-center'>
                <button
                    disabled={!isPrevious}
                    className='btn btn-warning'
                    onClick={()=>{
                        prev();
                    }}
                >
                    Previous
                </button>
                <div className='flex-grow-1 text-center'>
                    {this.state.isEditable?(
                        <input
                            value={currentPage}
                            onChange={(e)=>handlePageChange(e.target.value)}
                            type='number'
                            onKeyPress={e=>{
                                if(e.key==='Enter'){
                                    goToPage()
                                    this.setState({isEditable:false})
                                }
                            }}
                        />
                    ):(
                        <p style={{userSelect:'none',lineHeight:'1.1'}}
                            title="Double Tap to Jump Page"
                            onDoubleClick={()=>{
                                this.setState({isEditable:!this.state.isEditable})
                        }}>
                            {currentPage} of {totalPage}
                            <br/>
                            <small>Double Tap to Edit</small>
                        </p>
                    )}
                </div>
                <button
                    className='btn btn-warning'
                    disabled={!isNext}
                    onClick={()=>{
                        next()
                    }}
                >Next</button>
            </div>
        )
    }
}

export default Pagination
