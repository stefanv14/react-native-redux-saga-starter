import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TEST_ACTION } from '../../actions/action-types'

const InitialScreen = () => {
  const { data } = useSelector((state) => state.test)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'TEST_ACTION' })
  }, [])
  console.log(data)
  return (
    <View style={styles.container}>

      <Text style={styles.text}>{data.country_code}</Text>
    </View>
  )
}

export default InitialScreen

const styles = StyleSheet.create({
  text: {
    color: '#333',
  },
})
