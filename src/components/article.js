import React from 'react';

const Article = ({ picture, description }) => {
    return (
        <div>
            <img src={picture} alt="Article" />
            <p>{description}</p>
        </div>
    );
};

export default Article;