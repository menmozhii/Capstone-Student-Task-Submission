import React from 'react'

function Footer() {
  return<>
  {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div className="me-5 d-none d-lg-block">
      {/* <span>Get connected with us on this networks:</span> */}
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <div>
          <p><b>"Most Trusted Vernacular Edtech Brand"</b> 
           </p>
           <p>
           Awarded by <b>ENTREPRENEUR INDIA</b> for having the best online personalized learning programs
           </p>
          </div>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Technologies
          </h6>
          <p>
            <a href="https://angular.io/" target='_self' className="text-reset">Angular</a>
          </p>
          <p>
            <a href="https://react.dev/" className="text-reset">React</a>
          </p>
          <p>
            <a href="https://expressjs.com/" className="text-reset">Express</a>
          </p>
          <p>
            <a href="https://www.mongodb.com/try/download/compass" className="text-reset">MongoDB</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
    
          </h6>
          <p>
            <a href="#!"className="text-reset"></a>
          </p>
          <p>
            <a href="#!" className="text-reset"></a>
          </p>
          <p>
            <a href="#!" className="text-reset"></a>
          </p>
          <p>
            <a href="#!" className="text-reset"></a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> TamilNadu, ch 600111, TN</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
    <a href="mailto:mozhieee@gmail.com">mozhieee@gmail.com </a>
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
    © 2024 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">StudentPortal.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
  
  </>
}

export default Footer