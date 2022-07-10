import React from 'react'

const Preview = () => {
  return (
    <div className="preview">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="preview__body">
                        <div className="preview__body__heading">
                            <span className="animate"></span>
                            <div className="preview__body__heading__h1 animate">
                                <h1>Take the Builder for a Spin</h1>
                            </div>
                            <div className="preview__body__heading__p animate">
                                <p>Get an interactive preview of Unboucer Builder -no signup needed.</p>
                            </div>
                        </div>
                        <div className="preview__body__bottom animate">
                            <input type="button" value="Preview Unbounce" className="btn-default"/>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="preview__body">
                        <div className="preview__body__heading">
                            <span className="animate"></span>
                            <div className="preview__body__heading__h1 animate">
                                <h1>Start Your Free 14-Day Trial</h1>
                            </div>
                            <div className="preview__body__heading__p animate">
                                <p>Get full feature access to any plan with a 14-day trial, Create and publish as many pages as you like and cancel anytime, no questions asked.</p>
                            </div>
                        </div>
                        <div className="preview__body__bottom animate">
                            <input type="button" value="Get started Now" className="btn-default-r"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preview