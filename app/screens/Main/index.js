import React, { Component } from 'react'
import { Content } from 'native-base'
import PropTypes from 'prop-types'

import Actions from '../../actions'
import Network from '../../lib/stellar-network'
import styles from './style'
import config from '../../config'
import AssetList from '../../components/AssetList'

export default class Main extends Component {

  constructor() {
    super()
    this.state = { assetsLoaded: false }
    this.network = Network(config.network, config.testnet)
  }

  getChildContext() {
    return { network: this.network }
  }

  componentWillMount() {
    this.unsubscribe = this.context.store.subscribe(this.respondToStoreChanges)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  respondToStoreChanges() {
  }

  render() {
    const { assets } = this.context.store.getState()
    return (
      <Content>
        <AssetList assets={assets.data} />
      </Content>
    )
  }

  static contextTypes = {
    store: PropTypes.object
  }

  static childContextTypes = {
    network: PropTypes.object
  }

  static navigationOptions = {
    title: 'Main',
  }

}
