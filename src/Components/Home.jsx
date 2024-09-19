import React from 'react'
import myimage from '../assets/PortfolioImage.png'

const Home = (props) => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-6 col-sm-6  d-flex justify-content-center mt-5">
                        <div className='d-flex flex-column' style={{ width: 600, height: 500 }}>
                            <div className={`fs-4 fw-bolder mt-5  text-${props.mode === 'light' ? 'dark' : 'light'}`}>Hello,</div>
                            <div className={`fs-1 fw-bold mt-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>I'm <span className='text-danger'>Gaurav</span></div>
                            <div className={`fs-1 fw-bold mt-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Website Designer</div>
                            <div className={`text-wrap fs-5 fw-semibold mt-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 mt-5">
                        <div className='d-flex justify-content-center '>
                            <img src={myimage} alt='Image Load' className='rounded' style={{ width: 400, height: 550 }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
