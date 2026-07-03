import './services.css'
import ServicesB from './serviceB/serviceB'

function Services() {

    let props = [
        {
            id : 1,
            title : 'WEB DESIGN',
            icon : 'bi bi-briefcase',
            paragraph : "#1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
        },
        {
            id : 2,
            title : 'WEB DEVELOPMENT',
            icon : 'bi bi-card-checklist',
            paragraph : "#2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
        },

        {
            id : 3,
            title : 'PHOTOGRAPHY',
            icon : 'bi bi-bar-chart',
            paragraph : "#3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
        },

        {
            id : 4,
            title : 'RESPONSIVE DESIGN',
            icon : 'bi bi-binoculars',
            paragraph : "#4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
        },

        {
            id : 5,
            title : 'GRAPHIC DESIGN',
            icon : 'bi bi-brightness-high',
            paragraph : "#5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
        },

        {
            id : 6,
            title : 'MARKETING SERVICES',
            icon : 'bi bi-calendar4-week',
            paragraph : "#6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
        }
    ]


    return(
        <>
        
            <section id="services">
                <div className="container">
                    <div className="section-info">
                    <h2 className="section-title">SERVICES</h2>
                    <p className="section-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    </div>
                    <div className="row">
                        {props.map(item => <ServicesB key={item.id} {...item}/>)}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services