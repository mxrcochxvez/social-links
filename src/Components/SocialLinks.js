import React from 'react';

const SocialLink = ({
    name,
    description,
    links
}) => {
    return(
        <div>
            <h1>Here's {name ? `${name}'s` : 'my'} links!</h1>
            <ul>
                {links.map((link, idx) => {
                    return(
                        <li>
                <a href={link.url}>{link.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialLink;