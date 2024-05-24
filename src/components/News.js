import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes  from 'prop-types';
import "../components/css/Style.css"
export class News extends Component {
     static defaultProps ={
       country:"us",
       pageSize: 5,
       category:"general",


    }
     static propTypes ={
       country:PropTypes.string,
       pageSize: PropTypes.number,
       category: PropTypes.number,
   }
  articles =[
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  
   capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  constructor(props){
    super(props);
    this.state ={
      articles : this.articles,
      loading : false,
      page : 1
    } 
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parseDate = await data.json();
    this.setState({articles:parseDate.articles, 
      totalResults:parseDate.totalResults,
      loading:false,
    })

  }
  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a76bb651c7144aef84113fe33e60fe1d&page=1&pageSize=${this.props.pageSize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // console.log(data)
    // let parseDate = await data.json();
    // this.setState({articles:parseDate.articles, 
    //   totalResults:parseDate.totalResults,
    //   loading:false,
    // })
    this.updateNews();
  }
  handelpreClick = async()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=a76bb651c7144aef84113fe33e60fe1d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    // let data = await fetch(url);
    // this.setState({loading:true})
   
    // let parseDate = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles : parseDate.articles,
    //   loading:false
    // })
    this.setState({page:this.state.page - 1})
    this.updateNews();

  }
  handelnextClick = async() =>{
  //   if(! this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=a76bb651c7144aef84113fe33e60fe1d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
  //   let data = await fetch(url);
  //   console.log(data)
  //   this.setState({loading:true})
  //   let parseDate = await data.json();
  //   console.log(parseDate)
  //   this.setState({
  //     page: this.state.page +1,
  //     articles : parseDate.articles,
  //     loading: false
  //   })
  // } 
  this.setState({page:this.state.page + 1})
  this.updateNews();
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'80px'}}> NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
         {this.state.loading && <Spinner /> } 
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
             <NewsItems title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage}
             newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>
          })}
        </div>
      <div className='container d-flex justify-content-between'>
       <button disabled = {this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handelpreClick}> &larr; Previous</button>
       <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handelnextClick}>Next&rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
