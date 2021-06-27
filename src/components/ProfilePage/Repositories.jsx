import React from 'react'


const Repositories = ({name, htmlUrl, updatedAt,description}) => {

return(
    <div className="repo">
    <span className="dev-repo-name">
      <a href={htmlUrl} target="_blank" rel="noreferrer">
        {name}&nbsp;&#8599;
      </a>
    </span>
    <span className="dev-repo-updated-at">{updatedAt}</span>
    {description && <div className="dev-repo-description">{description}</div>}
  </div>
);
}

export default Repositories