import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './spinner';
import PropTypes from 'prop-types' 


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  
  constructor(){
    super();
    this.state = {
    articles: [],
    loading: false,
    page: 1 
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e44b8fd7a47a45f090a4db74552cd23d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       loading: false
      })
  }

  async componentDidMount(){
     this.updateNews();

  }

  handlePrevClick =async () => {
    // console.log("prev")
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e44b8fd7a47a45f090a4db74552cd23d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading: false
    // })
    this.setState({page: this.state.page - 1})
    this.updateNews(); 
  }

  handleNextClick = async () => {
    console.log("next")
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e44b8fd7a47a45f090a4db74552cd23d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false
  //   })
  // }
  this.setState({page: this.state.page + 1})
  this.updateNews();
  }

  render() {
    return (
        <div className="container my-3">
          <h1 className='text-center'>News Monkey - Top HeadLines</h1>
          {/* {this.state.loading && <Spinner/>} */}
       <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
       <div className="col-md-4" key={element.url}>
         <NewsItem  title={element?element.title:""} Descripton={element.description} imageurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt}/>  {/* .slicce(0, 45) for how much chcter do you want to show  */}
        </div>
        })}
        
        </div>
        <div className="coontainer d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
        </div>
      </div>
    )
  }
}

export default News
