import React, {useState, useEffect} from 'react';
import NewsItem from "./newsitem";
import {API_KEY} from "../credentials.js"



export default function News(props) {

    
  const [newsData, setnewsData] = useState(null);
  const [searchData, setsearchData] = useState("india");
  const [pagenumber, setpageNumber] = useState(1);
  const [totalresults, setTotalResults] = useState(0);


  const handleNextpage = async () => {
    console.log(pagenumber);
    if (pagenumber+1 <= Math.ceil(totalresults/21)) {
      
      let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${API_KEY}&page=${pagenumber+1}&pageSize=21`;
      let data = await fetch(url);
      let jsonData = await data.json();
      console.log(jsonData.articles);
      setnewsData(jsonData.articles);
      setpageNumber(pagenumber + 1);
    }

  }

  const handlePrevpage = async () => {
    console.log(pagenumber);
    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${API_KEY}&page=${pagenumber-1}&pageSize=21`;
    let data = await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData.articles);
    setnewsData(jsonData.articles);
    setpageNumber(pagenumber - 1);
  }

  const getData = async () => {

    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${API_KEY}&page=${pagenumber}&pageSize=21`;
    let data = await fetch(url);
    console.log(data);
    let jsonData = await data.json();
    console.log(jsonData.articles);
    setnewsData(jsonData.articles);    //array
    setTotalResults(jsonData.totalResults);
  }



  //useEffect HOOK sare component render hone k baad call hota h 
  // useffect react functional based component ka lifecycle method h jese class based m (componentDidMount) hota h
  // 3 phases hote h lifecycle method m == 1: mounting, 2:  updating,  3: clearing or delete or unmounting


  useEffect(() => {
    
        setsearchData(props.category);
        getData();
    
  },[props.category, searchData])



    return (
        <>
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                   
                   
                    {  newsData ? newsData.map((currItem, i) => {

                        if (!currItem.urlToImage)
                            return null;
                        else {
                            return (

                                <div className="col-md-4" key={currItem.url}>
                                    <NewsItem title={currItem.title} description={currItem.description}
                                        imageUrl={currItem.urlToImage} newsurl={currItem.url} />
                                </div>

                            );
                        }

                    }) : <h2><br></br><br></br><br></br><br></br>
                           No Updates right Now...!</h2>}
                
                   
                </div>

            </div>
            
            <div className="container d-flex justify-content-between">
                <button disabled={pagenumber <= 1} className="btn btn-dark" onClick={handlePrevpage}>Previous</button>
                <button  className="btn btn-dark" onClick={handleNextpage}>Next</button>

            </div>

        </>
    )
}