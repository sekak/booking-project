import './Skeleton.css'

const Sketeton = ({ type }) => {

    const FeaturedSk = () => {
        return (
            <div className='featuredSk'>
                <div className='featuedSkWrap'>
                    <div className='itemsSk'>
                        <span className='titleSk'></span>
                        <span className='titleSkSm'></span>
                    </div>
                </div>
                <div className='featuedSkWrap'>
                    <div className='itemsSk'>
                        <span className='titleSk'></span>
                        <span className='titleSkSm'></span>
                    </div>
                </div>
                <div className='featuedSkWrap'>
                    <div className='itemsSk'>
                        <span className='titleSk'></span>
                        <span className='titleSkSm'></span>
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
                        <span className='titleSkSmPr'></span>
                    </div>
                </div>
                <div className='containerSkPr' >
                    <div className='propertySkWrap'>
                        <div className='imgSkPr' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titleSkPr'></span>
                        <span className='titleSkSmPr'></span>
                    </div>
                </div>
                <div className='containerSkPr' >
                    <div className='propertySkWrap'>
                        <div className='imgSkPr' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titleSkPr'></span>
                        <span className='titleSkSmPr'></span>
                    </div>
                </div>

                <div className='containerSkPr' >
                    <div className='propertySkWrap'>
                        <div className='imgSkPr' />
                    </div>
                    <div className='itemsSkPr'>
                        <span className='titleSkPr'></span>
                        <span className='titleSkSmPr'></span>
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
                        <span className='citySkPrSm'></span>
                        <span className='priceSkPrSm'></span>
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
                        <span className='citySkPrSm'></span>
                        <span className='priceSkPrSm'></span>
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
                        <span className='citySkPrSm'></span>
                        <span className='priceSkPrSm'></span>
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
                        <span className='citySkPrSm'></span>
                        <span className='priceSkPrSm'></span>
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
                        <span className='titleMiddlSk'></span>
                        <span className='titleMiddlSpanSk'></span>
                         <span className='titleMiddlSk'></span>
                       <span className='boldTitleSk'></span>
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
    
    if (type === "featured") return <FeaturedSk />
    if (type === "property") return <Property />
    if (type === "featuredPr") return <FeaturedPr />
    if (type === "searchItem") return  Array(6).fill().map((item,i )=><SearchItemSk  key={i}/>);

}

export default Sketeton
