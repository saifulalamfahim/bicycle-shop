
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css';

const Home = () => {

    const [curds, setCurds] = useState([]);

    useEffect(() => {
        fetch('https://thawing-woodland-11369.herokuapp.com/Curds')
        .then(res => res.json())
        .then(data => setCurds(data))
    }, [])

    return (
        <div className="row">
            {
                curds.length === 0 && <CircularProgress className="snniper" />
            }
         {
             curds.map(curd => <Card curd={curd}></Card>)
         }
        </div>
    );
};

export default Home;