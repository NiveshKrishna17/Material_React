import React, { Fragment, useState } from 'react'

export default function Accordion() {

    const items = [
        { title: 'Item 1', content: 'Content for Item 1' },
        { title: 'Item 2', content: 'Content for Item 2' },
        { title: 'Item 3', content: 'Content for Item 3' },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <Fragment>
            <p>Accordion</p>
            <div>
                {items.map((item, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <div onClick={() => handleClick(index)} style={{
                            backgroundColor: activeIndex === index ? "#ccc" : "#fff",
                            cursor: "pointer",
                            padding: "5px 10px",
                            borderRadius: "5px"
                        }}>
                            {item.title}
                        </div>
                        {
                            index === activeIndex &&
                            <div style={{
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                borderRadius: '5px'
                            }}>
                                {item.content}
                            </div>
                        }
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
