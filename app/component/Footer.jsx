/*
 * This is a composite component that consists of
 * three FilterLink childrend
 */

import React from 'react';
import FilterLink from './FilterLink.jsx';

const Footer = () => (
  <p>
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
