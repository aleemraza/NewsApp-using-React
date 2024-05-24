import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107237776-1683579144304-Traders-OB-20230508-CC-PRESS-3.jpg?v=1695391236&w=1920&h=1080": imageUrl} className="card-img-top" alt=""/>
        <div className="card-body">
        <h5 className="card-title">{title} <span class="badge rounded-pill text-bg-info">{source}</span> </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small class="text-body-secondary">by {!author?"Unkown":author} On {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
       </div>
       </div>
    </div>
      
    )
  }
}

export default NewsItems
