import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SortForm from '../../layouts/sort_form'
import List from './list'

export default function Option() {
    let [searchParams] = useSearchParams()
    const [option, setOption] = useState({
        category: {
            action: true,
            adventure: true,
            fps: true,
            horror: true,
            intelligence: true,
            multiplayer: true,
            sport: true,
        },
        range: {
            start: 0,
            end: 0,
        },
        sortBy: 'normal',
        fee: false,
        sale: false,
    })
    // useEffect(() => {
    //     var form = document.forms['form'];
    //     form.onsubmit = e => {
    //         setOption({
    //             category: {
    //                 action: searchParams.get('action'),//document.getElementById('action').checked,
    //                 adventure: document.getElementById('adventure').checked,
    //                 fps: document.getElementById('fps').checked,
    //                 horror: document.getElementById('horror').checked,
    //                 intelligence: document.getElementById('intelligence').checked,
    //                 multiplayer: document.getElementById('multiplayer').checked,
    //                 sport: document.getElementById('sport').checked
    //             },
    //             range: {
    //                 start: Number(document.getElementById('lowest').value),
    //                 end: Number(document.getElementById('highest').value)
    //             },
    //             sortBy: document.getElementById('sort').value,
    //             fee: (document.querySelector('input[name="fee"]:checked').value === 'true'),
    //             sale: (document.querySelector('input[name="sale"]:checked').value === 'true')
    //         })
    //     }
    //     console.log(option)
    // }, [])
    useEffect(() => {
        setOption({
            category: {
                action: searchParams.get('action') === 'on',
                adventure: searchParams.get('adventure') === 'on',
                fps: searchParams.get('fps') === 'on',
                horror: searchParams.get('horror') === 'on',
                intelligence: searchParams.get('intelligence') === 'on',
                multiplayer: searchParams.get('multiplayer') === 'on',
                sport: searchParams.get('sport') === 'on',
            },
            range: {
                begin: Number(searchParams.get('lowest')),
                end: Number(searchParams.get('highest')),
            },
            sortBy: searchParams.get('sortBy'),
            fee:
                searchParams.get('fee') === null
                    ? null
                    : searchParams.get('fee') === 'true',
            sale:
                searchParams.get('sale') === null
                    ? null
                    : searchParams.get('sale') === 'true',
        })
    }, [searchParams])
    return (
        <div>
            <div>
                <div className='order-option'>
                    <SortForm></SortForm>
                </div>
            </div>
            <List option={option}></List>
        </div>
    )
}
