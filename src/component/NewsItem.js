import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "20rem" }}>
                    <div className="container" style={{display:'flex',justifyContent:'flex-end', position:'absolute',right:'20'}}>
                    <span className="badge rounded-pill bg-danger">
                        {source} </span></div>
                    <img src={!imageUrl ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg" : imageUrl} className='card-image-top' alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknow" : author} On {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_ rel="" blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
