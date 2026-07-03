import './footer.css'

function Footer({website}) {
    return(
        <>
        
            <footer>
                <div className="container">
                    <p className="copyright">
                    © Copyright <strong>{website}</strong>. All Rights Reserved
                    </p>
                    <p>Designed by {website}</p>
                </div>
            </footer>
        
        </>
    )
}

export default Footer