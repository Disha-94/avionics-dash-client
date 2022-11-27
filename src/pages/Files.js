import React from 'react';
import Main from '../components/Main';
import files from '../data/filesLink'
import "../scss/pages/files.scss"

function Files() {
    return (
        <Main
            title="Files"
            description="This page displays list of files related to your courses"
        >
            <ul class="no-bullets">
                {files && files.map((item, key) => {
                    return (
                        <li key={key}>
                            <iframe width="420" height="345" src={item} title={key}> </iframe>
                        </li>
                    )
                }
                )}
            </ul>
        </Main>
    )
}

export default Files;