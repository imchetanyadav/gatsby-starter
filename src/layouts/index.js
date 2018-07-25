import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Provider} from 'rebass'
import Header from '../components/header'
import Footer from '../components/footer'
import Theme from '../theme' 
import './index.css'

const Layout = ({ children, data }) => (
    <div>
      <Helmet
        // title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Provider theme={Theme}>
        <Header />
        <div style={{paddingTop: '64px'}}>
          {children()}
        </div>
        <Footer />
      </Provider>
    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

