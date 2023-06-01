import cv from '../../assets/001Abolade-Samuel-Resume.pdf'
const CTA = () => {
    return (
        <>
            <div className="cta_div">
            <a href={cv} download className="custom_btn text-decoration-none">Download CV</a>
                <a href="#contact" className="btn btnPrimary p-3">Let's Talk</a>
            </div>
        </>
    )
}
export default CTA