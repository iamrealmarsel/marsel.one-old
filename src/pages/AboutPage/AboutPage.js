import React from 'react';
import PropTypes from 'prop-types';
import Header from '@components/Header';
import Footer from '@components/Footer';
import cn from '@styles/general.scss';

function AboutPage({ location }) {
  return (
    <div className={cn.page}>
      <Header pathname={location.pathname} />
      <div>Sooon ... !...</div>
      <Footer pathname={location.pathname} />
    </div>
  );
}

AboutPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AboutPage;