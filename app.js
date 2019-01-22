let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=62EG1F4RHYRYFUFI';

fetch(url)
  .then(response => response.json())
  .then(data => {
      //console.log(data);  
      const metaData = Object.values(data);
      //console.log(metaData);
      const fullInfo = metaData [0];
      //console.log(fullInfo);
      const info = Object.values(fullInfo);
      //console.log(info);
      const information = info[0];
      const symbol = info[1];  
      const lastRefreshed = info[2];
      const interval = info[3];
      const outputSize = info[4];
      const timeZone = info[5];
         
  }) 
  
