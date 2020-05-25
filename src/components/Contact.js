import React from 'react';

function Contact(props) {
    // redirect user to 'about' page after 2 seconds
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatem ab aliquam iure animi quos repudiandae blanditiis quia, hic illo quam minus placeat dignissimos odio autem temporibus nihil aperiam exercitationem?</p>
        </div>
    )
}

export default Contact;