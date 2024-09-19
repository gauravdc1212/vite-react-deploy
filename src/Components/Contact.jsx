import React from 'react'

const Contact = (props) => {
  return (
    <>
      <div className="form-area">
        <div className="container">
          <div className="row single-form g-0">
            <div className="col-sm-12 col-lg-6">
              <div className="left">
                <h2><span className={` fw-bolder mt-5  text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 75 }}>Contact Us</span></h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="right">
                <i className='fa fa-caret-left'></i>
                <form action='https://api.web3forms.com/submit  ' method="POST" id="form">
                  <input type="hidden" name="access_key" value="1c71c990-f24e-41c8-9f7e-4c3cb764fc73" />
                  <div className="mb-3">
                    <label htmlFor="name" className={`fs-4 fw-bolder mt-5 form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Name</label>
                    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" />

                  </div>
                  <div class="mb-3">
                    <label for="email" className={`fs-4 fw-bolder mt-5 form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Email Address</label>
                    <input type="email" class="form-control" id="email" name='email' />
                  </div>
                  <div className="mb-3">
                    <label className={`fs-4 fw-bolder mt-5 form-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="message">Message</label>
                    <textarea className='form-control' id='message' name='message'></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
