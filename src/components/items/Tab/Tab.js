import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    // static propTypes = {
    //     activeTab: PropTypes.string.isRequired,
    //     label: PropTypes.string.isRequired,
    //     onClick: PropTypes.func.isRequired,
    // };

    onClick = () => {
        const { label, onClick } = this.props;
        //console.log(this.props)
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            }
        } = this;

        let className = 'tab-list-item';
        // console.log(label)
        // console.log(activeTab)
        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li className={className} onClick={onClick} >{label} </li>
        );
    }
}

export default Tab;