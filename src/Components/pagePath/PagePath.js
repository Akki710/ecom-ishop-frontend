import React from 'react';
import { withRouter } from 'react-router';
// Import css
import "./PagePath.scss";

const PagePath = ({match}) => {
    return (
        <div className="page-path">
            <p className="url">{match.url}</p>
        </div>
    );
};

export default withRouter(PagePath);
