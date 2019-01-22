let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=62EG1F4RHYRYFUFI';

fetch(url)
  .then(response => response.json())
  .then(data => {
      //console.log(data);  
      const metaData = Object.values(data);
      console.log(metaData);
      const info = metaData[0];
        console.log(info);
      const interval = info.Information;
        console.log(interval);
      
    //   document.getElementById('info').innerHTML = info;
    
  }) 
  
