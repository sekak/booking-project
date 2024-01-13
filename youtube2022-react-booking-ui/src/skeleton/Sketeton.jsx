import './Skeleton.css'

const Sketeton = ({ type }) => {

    const FeaturedSk = () => {
        return (
            <div className='featuredSk'>
                <div className='featuedSkWrap'>
                    <div className='itemsSk'>
                        <span className='titleSk'></span>
                        <h4 className='titleSkSm'></h4>
                    </div>
                </div>
                <div className='featuedSkWrap'>
                    <div className='itemsSk'>
                        <span className='titleSk'></span>
                        <h4 className='titleSkSm'></h4>
                    </div>
                </div>
                <div className='featuedSkWrap'>
                    <div className='itemsSk'>
                        <span className='titleSk'></span>
                        <h4 className='titleSkSm'></h4>
                    </div>
                </div>
            </div>
        )
    }

    const Property = () => {
        return (
            <div className='propertySk'>
                <div className='containerSkPr' >
                    <div className='propertySkWrap'>
                        <div className='imgSkPr' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titleSkPr'></span>
                        <h4 className='titleSkSmPr'></h4>
                    </div>
                </div>
                <div className='containerSkPr' >
                    <div className='propertySkWrap'>
                        <div className='imgSkPr' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titleSkPr'></span>
                        <h4 className='titleSkSmPr'></h4>
                    </div>
                </div>
                <div className='containerSkPr' >
                    <div className='propertySkWrap'>
                        <div className='imgSkPr' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titleSkPr'></span>
                        <h4 className='titleSkSmPr'></h4>
                    </div>
                </div>

                <div className='containerSkPr' >
                    <div className='propertySkWrap'>
                        <div className='imgSkPr' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titleSkPr'></span>
                        <h4 className='titleSkSmPr'></h4>
                    </div>
                </div>

            </div>
        )
    }

    const FeaturedPr = () => {
        return (
            <div className='FeaturedPrSk'>
                <div className='containerPrSk' >
                    <div className='FeaturedPrSkWrap'>
                        <div className='imgPrSk' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titlePrSk'></span>
                        <h4 className='citySkPrSm'></h4>
                        <h4 className='priceSkPrSm'></h4>
                        <div className='ratingSk'>
                            <div className='rateSk'></div>
                            <div className='descSk'></div>
                        </div>
                    </div>
                </div>


                <div className='containerPrSk' >
                    <div className='FeaturedPrSkWrap'>
                        <div className='imgPrSk' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titlePrSk'></span>
                        <h4 className='citySkPrSm'></h4>
                        <h4 className='priceSkPrSm'></h4>
                        <div className='ratingSk'>
                            <div className='rateSk'></div>
                            <div className='descSk'></div>
                        </div>
                    </div>
                </div>
                <div className='containerPrSk' >
                    <div className='FeaturedPrSkWrap'>
                        <div className='imgPrSk' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titlePrSk'></span>
                        <h4 className='citySkPrSm'></h4>
                        <h4 className='priceSkPrSm'></h4>
                        <div className='ratingSk'>
                            <div className='rateSk'></div>
                            <div className='descSk'></div>
                        </div>
                    </div>
                </div>
                <div className='containerPrSk' >
                    <div className='FeaturedPrSkWrap'>
                        <div className='imgPrSk' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titlePrSk'></span>
                        <h4 className='citySkPrSm'></h4>
                        <h4 className='priceSkPrSm'></h4>
                        <div className='ratingSk'>
                            <div className='rateSk'></div>
                            <div className='descSk'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const SearchItemSk = () => {
        return (
            <div className='containerSearchSk'>
                <div className='wrapperSearchSk'>
                    <div className='leftSearchSk'>
                        <div className='imgLeftSk'></div>
                    </div> 
                    <div className='middleSearchSk'>
                        <h1 className='titleMiddlSk'></h1>
                        <h3 className='titleMiddlSpanSk'></h3>
                         <h1 className='titleMiddlSk'></h1>
                       <h1 className='boldTitleSk'></h1>
                         <p className='descMidSk'></p>
                        <p className='descMidGreenSk'></p>
                        <p className='descMidGreenBoldSk'></p>
                    </div>
                    <div className='rightSearchSk'>
                        <div className='topSk'>
                            <div className='rateTopSk'></div>
                            <div className='ratingSk'></div>
                        </div>
                        <div className='bottomSk'>
                            <div className='priceBottomSk'></div>
                            <div className='descBottomSk'></div>
                            <div className='bottoBottomSk'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    if (type == "featured") return <FeaturedSk />
    if (type == "property") return <Property />
    if (type == "featuredPr") return <FeaturedPr />
    if (type == "searchItem") return  Array(6).fill().map((item,i )=><SearchItemSk  key={i}/>);

}

export default Sketeton
