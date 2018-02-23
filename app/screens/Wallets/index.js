import React, { Component } from 'react'
import { Content, Text } from 'native-base'
import PropTypes from 'prop-types'

import Actions from '../../actions'
import styles from './style'
import config from '../../config'

export default class Wallets extends Component {

  componentWillMount() {
    this.unsubscribe = this.context.store.subscribe(this.respondToStoreChanges)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  respondToStoreChanges() {
  }

  render() {
    return (
      <Content>
        <Text>Wallets</Text>
      </Content>
    )
  }

  static contextTypes = {
    store: PropTypes.object
  }

  static navigationOptions = {
    title: 'Wallets',
  }

}
