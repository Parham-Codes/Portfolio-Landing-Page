function BlogB({src , title , author , paragraph}) {
    return(
        <>
        
            <div className="col-4">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={src} className="img-fluid" />
                    </div>
                    <div className="blog-content">
                        <h3 className="blog-title">{title}</h3>
                        <p className="blog-desc">{paragraph}</p>
                    </div>
                    <div className="blog-footer">
                        <div className="post-author">
                        <p className="author">{author}</p>
                        </div>
                        <div className="post-date">
                        <span className="bi bi-clock"></span> 10 min
                        </div>
                    </div>
                </div>
            </div>
          
        
        </>
    )
}

export default BlogB