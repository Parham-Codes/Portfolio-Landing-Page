import './blog.css'
import BlogB from './blogB/blogB'

function Blog() {

    let props = [
        {
            id : 1,
            src : './asset/img/post-1.jpg',
            title: 'post title 1',
            author : 'Parham Taghikhani',
            paragraph : '#1 Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
        },
        {
            id : 2,
            src : './asset/img/post-2.jpg',
            title : 'post title 2',
            author : 'Rastin Abasi',
            paragraph : '#2 Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
        },
        {
            id : 3,
            src : './asset/img/post-3.jpg',
            title : 'post title 3',
            author : 'Keivan Hassani', 
            paragraph : '#3 Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
        }
    ]

    return(
        <>
        
            <section id="blog">
                <div className="container">
                    <div className="section-info">
                    <h2 className="section-title">BLOG</h2>
                    <p className="section-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    </div>

                    <div className="row">
                        {props.map(item => <BlogB key={item.id} {...item} />)}``
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Blog