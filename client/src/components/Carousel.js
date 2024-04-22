import React from 'react'

export default function Carousel() {
    return (
        <div className='m-1' style={{maxHeight:"500px"}}>
        <div id="carouselExampleFade" className="carousel slide carousel-fade align-content-center" data-bs-ride="carousel" style={{objectFit:"contain !important",maxHeight:"600px"}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2023/07/28/10/17/machinery-8154964_1280.jpg" className="d-block w-100 " alt="..." style={{maxHeight:"500px",maxwidth:"500px"}}/>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2016/10/17/21/24/tractor-1748636_640.jpg" className="d-block w-100 " alt="..."style={{maxHeight:"500px",maxwidth:"500px"}}/>
                </div>
                <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/907966126/photo/tractor-spraying-pesticides-on-vegetable-field-with-sprayer-at-spring.jpg?s=2048x2048&w=is&k=20&c=RCKWU8M3E32zK6qb9aLIRaXPCj1oQCQt9GYXSpnBi8k=" className="d-block w-100 " alt="..."style={{maxHeight:"500px",maxwidth:"500px"}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}
