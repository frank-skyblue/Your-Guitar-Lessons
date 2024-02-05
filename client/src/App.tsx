import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { url } from './util/constants';

function App() {
    console.log(url)
    const [message , setMessage] = React.useState<string>('');
    useEffect(() => {
        axios.get(url + '/api/hello')
            .then((res) => {
                console.log(res.data)
                setMessage(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  return (
      <h1 className="text-3xl font-bold underline text-red-600">
          {message}
      </h1>
  );
}

export default App;
