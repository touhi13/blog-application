import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

export default function sidebar() {
    return (
        <aside>
            <div className="sidebar-items">
                <Sort />
                <Filter />
            </div>
        </aside>
    )
}
