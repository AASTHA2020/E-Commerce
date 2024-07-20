import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function Rating({ rating }) {

    return (
        <div className="flex flex-row gap-1 text-xl">
            {
                Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon="fa-solid fa-star"
                        className={index < rating ? 'text-yellow-500': 'text-gray-400'}
                    />
                ))
            }
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};

