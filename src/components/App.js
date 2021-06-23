import React from 'react'

import Header from './component/header.jsx'
import Pagination from './component/pagination.jsx'
import NewsComponent from './component/NewsComponent.jsx'
import Loading from './component/loading.jsx'
import News,{newsCategory} from './component/news/indexNews.jsx'

const news=new News(newsCategory.technology)
class App extends React.Component{
  state={
    data:{},
    isLoading:true
  }

  aboutResult=React.createRef()
  jumbtronRef=React.createRef()
  searchRef=React.createRef()
  cbRef=null
  itemRefList=[]

  refCallBack=(element)=>{
    this.cbRef=element
  }

  goToTop=()=>{
    window.scroll(0,this.aboutResult.current.scrollTop)
  }

  handleError=(e)=>{
    console.log(e)
    alert('something went wrong')
    this.setState({isLoading:false})
  }

  componentDidMount(){
    news.getNews()
      .then(data=>{
        this.setState({data,isLoading:false})
      })
      .catch(e=>{
          this.handleError(e)
      })
      this.searchRef.current.focus()
      console.log(this.itemRefList)
 }

  next=()=>{
    if(this.state.data.isNext){
      this.setState({isLoading:true})
    }
    news.next()
      .then(data=>{
        this.setState({data,isLoading:false})
      })
      .catch(e=>{
        this.handleError(e)
      })
  }

  prev=()=>{
    if(this.state.data.isPrevious){
      this.setState({isLoading:true})
    }
    news.prev()
      .then(data=>{
        this.setState({data,isLoading:false})
      })
      .catch(e=>{
        this.handleError(e)
      })
  }

  handlePageChange=(value)=>{
    this.setState({
      data:{
        ...this.state.data,
        currentPage:Number.parseInt(value) 
      }
    })
    
  }

  goToPage=()=>{
    this.setState({isLoading:true})
    news.setCurrentPage(this.state.data.currentPage)
      .then(data=>{
        this.setState({data,isLoading:false})
      })
      .catch(e=>{
        this.handleError(e)
      })
  }

  changeCategory=(category)=>{
    this.setState({isLoading:true})
    news.changeCategory(category)
      .then(data=>{
        this.setState({data,isLoading:false})
      })
      .catch(e=>{
        this.handleError(e)
      })
  }

  search=searchTerm=>{
    this.setState({isLoading:true})
    news.search(searchTerm)
      .then(data=>{
        this.setState({data,isLoading:false})
      })
      .catch(e=>{
        this.handleError(e)
      })
  }

  render(){
    const {article,isPrevious,totalPage,isNext,category,totalResults,currentPage}=this.state.data
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 offset-md-3'>
            <Header ref={this.searchRef} search={this.search} changeCategory={this.changeCategory} category={category}/>
            <div ref={this.aboutResult} className='d-flex'>
              <p ref={this.refCallBack} className='text-black-50'>
                About {totalResults} results found
              </p>
              <p className='text-black-50 ml-auto'>
                 {currentPage} Page of {totalPage}
              </p>
            </div>
            {
              this.state.isLoading?(
                <Loading/>
              ):(
                <div>
                  <NewsComponent ref={this.itemRefList} news={article}/>
                  <Pagination
                    next={this.next}
                    prev={this.prev}
                    isPrevious={isPrevious}
                    isNext={isNext}
                    totalPage={totalPage}
                    currentPage={currentPage}
                    handlePageChange={this.handlePageChange}
                    goToPage={this.goToPage}
                  />
                  <button onClick={this.goToTop} className='btn btn-secondary my-5'>Go To Top</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
export default  App

