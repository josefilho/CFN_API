# CFN API

CFN API is a API to scrapy data of CFN (Consulta Federal de Nutricionistas) and return a response as JSON.

## Usage

Make requests on this [link](https://consult-cfn.herokuapp.com/findbysubscription/) changing sub.

```node
const axios = require('axios');

//That's it the subscription number
const sub = 0000;

const response = await axios.get(`https://consult-cfn.herokuapp.com/findbysubscription/${sub}`);

const { nutricionist } = response.data;
```
## Response
The variable ```nutricionist``` has this data 
```javascript
{
  "name": string,
  "subscription": number,
  "crn": string,
  "situation": string,
  "subscriptionType": string,
  "lastUpdate": string 
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
