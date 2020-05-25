import React from 'react';
import Rainbow from '../hoc/Rainbow';

function About() {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatem ab aliquam iure animi quos repudiandae blanditiis quia, hic illo quam minus placeat dignissimos odio autem temporibus nihil aperiam exercitationem?</p>
        </div>
    )
}

export default Rainbow(About);