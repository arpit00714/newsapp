import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title, Description, imageurl, newsUrl, date} = this.props;

    return (
      <div className='my-3'>   
   <div className="card" style={{width: "18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{Description}</p>
    <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
