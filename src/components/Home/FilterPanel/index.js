import React from 'react';
import FilterListToggle from '../../common/FilterListToggle';
import CheckBoxPortion from '../../common/checkBoxPortion/checkBoxPortion';
import SliderPortion from '../../common/Slider/Slider';
import { categoryList, ratingList } from '../../../constants/index';

import './styles.css';
const FilterPanel = ({selectedCategory , selectToggle , selectRating, selectedRating , cuisines, changeChecked , changedPrice ,selectedPrice}) => {
    return (
        <div>
            {/* category */}
            <div className="input-group">
                <p className='label'>Categories</p>
                <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle}  />
            </div>
            {/* cuisine  */}
            <div className="input-group">
                <p className="label">Cuisines</p>
                {
                    cuisines.map(cuisine => <CheckBoxPortion 
                    key={cuisine.id}
                    changeChecked={changeChecked}
                    cuisine={cuisine}
                    />)
                }
            </div>
            {/* price rage */}
            <div className="input-group">
                <p className="label">price range</p>
                <SliderPortion
                    value={selectedPrice}
                    changePrice={changedPrice}
                />
            </div>
            {/* star rating  */}
            <div className="input-group">
                <p className='label'>Star Rating</p>
                <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating}  />
            </div>
        </div>
    );
};

export default FilterPanel;