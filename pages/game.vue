<template>
  <v-layout>
    <v-flex text-xs-center>
      <div id="game-container" />
    </v-flex>
  </v-layout>
</template>
<script>
import Game from '../game/game'

export default {
  name: 'game',
  mounted () {
    Game.start()
  }
}
</script>