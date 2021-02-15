<template>
  <div class="hero">
    <img class="jip" src="/jip-body.png" alt="Jip with a cat on his shoulder" />
    <img ref="head" class="head" src="/jip-head.png" @click="activate" />
    <img
      ref="cat-head"
      src="/cat-head.png"
      class="cat"
      alt
      @click="activateCat"
    />
    <canvas v-if="player || catPlayer" ref="canvas" />
  </div>
</template>

<style lang="scss" scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9000;
  pointer-events: none;
}

.hero {
  position: relative;
  min-height: 360px;

  .jip {
    width: 270px;
    border-radius: 10px;
    display: block;
  }

  .head {
    width: 110px;
    position: absolute;
    bottom: 41%;
    left: 28px;
    transform: scale(1);
    transition: bottom 200ms, transform 200ms;
  }

  .cat {
    width: 73px;
    position: absolute;
    bottom: 26%;
    left: 148px;
    transform: scale(1);
    transition: transform 200ms;
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: var(--theme);
    border-radius: 10px;
    z-index: -1;
    transition: height 200ms;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
const headOffset = 0.1
const catOffset = -0.1

export default {
  data() {
    return {
      player: null,
      catPlayer: null,
      keys: {},
      running: false,
    }
  },
  mounted() {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown)
    document.removeEventListener('keyup', this.keyup)
  },
  methods: {
    activate() {
      const head = this.$refs.head
      const pos = head.getBoundingClientRect()
      this.player = {
        x: pos.x,
        y: pos.y,
        width: head.scrollWidth,
        height: head.scrollHeight,
        accel: 0.1,
        maxSpeed: 5,
        speed: 1,
        rotation: -Math.PI / 2 - headOffset,
      }

      requestAnimationFrame(() => {
        if (!this.running) this.update()
        head.classList.add('hidden')
      })
    },
    activateCat() {
      const head = this.$refs['cat-head']
      const pos = head.getBoundingClientRect()
      this.catPlayer = {
        x: pos.x,
        y: pos.y,
        width: head.scrollWidth,
        height: head.scrollHeight,
        accel: 0.1,
        maxSpeed: 15,
        speed: 1,
        rotation: -Math.PI / 2 - catOffset,
      }

      requestAnimationFrame(() => {
        if (!this.running) this.update()
        head.classList.add('hidden')
      })
    },
    update() {
      if (!this.running) this.running = true

      // Update head position
      const player = this.player
      if (player) {
        // Check controls
        if (this.keys.a) {
          player.rotation -= 0.02
        }
        if (this.keys.d) {
          player.rotation += 0.02
        }
        if (this.keys.w) {
          player.speed += player.accel
        }
        if (this.keys.s) {
          player.speed -= player.accel
        }

        this.check(player)
      }

      const catPlayer = this.catPlayer
      if (catPlayer) {
        // Check controls
        if (this.keys.arrowleft) {
          catPlayer.rotation -= 0.02
        }
        if (this.keys.arrowright) {
          catPlayer.rotation += 0.02
        }
        if (this.keys.arrowup) {
          catPlayer.speed += catPlayer.accel
        }
        if (this.keys.arrowdown) {
          catPlayer.speed -= catPlayer.accel
        }

        if (catPlayer.speed > catPlayer.maxSpeed) {
          catPlayer.speed = catPlayer.maxSpeed
        } else if (catPlayer.speed < -catPlayer.maxSpeed) {
          catPlayer.speed = -catPlayer.maxSpeed
        }

        this.check(catPlayer)
      }

      this.draw()

      requestAnimationFrame(this.update)
    },
    check(entity) {
      if (entity.speed > entity.maxSpeed) {
        entity.speed = entity.maxSpeed
      } else if (entity.speed < -entity.maxSpeed) {
        entity.speed = -entity.maxSpeed
      }

      // Add speed
      const addX = entity.speed * Math.cos(entity.rotation)
      const addY = entity.speed * Math.sin(entity.rotation)

      entity.x += addX
      entity.y += addY

      // Don't allow going past the edge
      const canvas = this.$refs.canvas
      if (entity.x - (entity.width + entity.height) > canvas.scrollWidth) {
        entity.x = -entity.width * 2
      }
      if (entity.x + (entity.width + entity.height) < 0) {
        entity.x = canvas.width + entity.width * 2
      }

      if (entity.y - (entity.width + entity.height) > canvas.scrollHeight) {
        entity.y = -entity.height * 2
      }
      if (entity.y + (entity.width + entity.height * 2) < 0) {
        entity.y = canvas.height + entity.height
      }
    },
    draw() {
      const canvas = this.$refs.canvas
      canvas.width = canvas.scrollWidth
      canvas.height = canvas.scrollHeight

      // Draw head
      const player = this.player
      const headImg = this.$refs.head
      if (player) this.drawT(player, headImg, headOffset)

      // Draw cat head
      const catPlayer = this.catPlayer
      const catHead = this.$refs['cat-head']
      if (catPlayer) this.drawT(catPlayer, catHead, catOffset)
    },
    drawT(el, img, offset) {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')

      ctx.save()
      ctx.translate(el.x + el.width / 2, el.y + el.height / 2)
      ctx.rotate(el.rotation + Math.PI / 2 + offset)
      ctx.drawImage(img, -el.width / 2, -el.height / 2, el.width, el.height)
      ctx.restore()
    },
    keydown(evt) {
      if (this.player || this.catPlayer) {
        if (evt.key.includes('Arrow')) evt.preventDefault()
        this.keys[evt.key.toLowerCase()] = true
      }
    },
    keyup(evt) {
      if (this.player || this.catPlayer) {
        if (evt.key.includes('Arrow')) evt.preventDefault()
        this.keys[evt.key.toLowerCase()] = false
      }
    },
  },
}
</script>
