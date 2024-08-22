import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'

const progress = () => {
  return (
    <ThemedView>
    <ThemedText type="title">exercise !</ThemedText>
    <HelloWave />
  </ThemedView>
  )
}

export default progress