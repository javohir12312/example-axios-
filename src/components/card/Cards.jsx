import React from 'react'

const Cards = () => {
    return (
        <div className='ca d-flex align-items-center justify-content-between flex-wrap'>
            <div className="all_text w-50">
                <h2>
                    SEEDRA Basil Seeds for Indoor and Outdoor Planting
                </h2>
                <p>
                    Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee
                </p>

                <div>
                    <span className='h2 mx-4'>$12.56</span>
                    <span className='text-decoration-line-through font-weight-bold h6 text-secondary'>$15.56</span>
                </div>

                <div>
                    <button className='btn btn-success mx-1 my-3'>Add to card</button>
                    <button className='btn text-success mx-1 my-3'>Discover</button>
                </div>
            </div>

            <img src="./assets/images/img.png" alt="" />
        </div>
    )
}

export default Cards