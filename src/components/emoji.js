import React from 'react'
import Emoji, { Twemoji } from 'react-emoji-render'
import { random } from 'emoji-random'

const RandomEmoji = () => (
  <div>
    <h1>Refresh to generate a random emoji</h1>
    <Emoji svg text={random()}  onlyEmojiClassName="make-emojis-large" />
  </div>
)

export default RandomEmoji
