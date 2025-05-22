import React from 'react';
import PropTypes from 'prop-types';

const DocumentationLink = ({slug, children}) => (
    <a
        href={`https://docs.turbowarp.org/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);
DocumentationLink.propTypes = {
    slug: PropTypes.string,
    children: PropTypes.node
};

export default DocumentationLink;
