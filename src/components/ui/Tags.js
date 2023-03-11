import React from 'react'

export default function Tags({ tags }) {
    return (
        tags ?
            tags.map((tag, index) => {
                return <span key={index}>{`#${tag}`} {index === tags.length - 1 ? "" : ", "}</span>
            })
            : null
    )
}
