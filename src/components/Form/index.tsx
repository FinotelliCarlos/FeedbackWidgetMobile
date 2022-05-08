import React, { useState } from 'react'
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { captureScreen } from 'react-native-view-shot'

import { styles } from './styles'
import { theme } from '../../theme'
import { FeedbackType } from '../Widget'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { ScreenshotButton } from '../ScreenshotButton'
import { Button } from '../Button'

interface Props {
  feedbackType: FeedbackType
}

export function Form({ feedbackType }: Props) {

  const [screenshot, setScreenshot] = useState<string | null>(null)

  const feedbackTypeInfo = feedbackTypes[feedbackType]
  
  function handleScreenshot(){
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  function removeScreenshot(){
    setScreenshot(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        multiline
        placeholder='Conte com detalhes oque está pensando!'
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <ScreenshotButton 
          onTakeShot={handleScreenshot}
          onRemoveShot={removeScreenshot}
          screenshot={screenshot}
        />
        <Button 
          isLoading={false}
        />
      </View>

    </View>
  )
}
