<template>
  <div class="hero">
    <img class="jip" src="/jip-body.png" alt="Jip with a cat on his shoulder" />
    <img
      ref="head"
      class="head"
      src="/jip-head.png"
      alt="Jip with a cat on his shoulder"
      @click="activate"
    />
    <canvas v-if="player" ref="canvas" />
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

  .jip {
    width: 270px;
    border-radius: 10px;
    display: block;
  }

  .head {
    width: 110px;
    position: absolute;
    bottom: 41%;
    left: 9%;
    transform: scale(1);
    transition: bottom 200ms, transform 200ms;

    &.hidden {
      opacity: 0;
    }
  }

  .head:hover {
    // bottom: 50%;
    // transform: scale(2);
    // animation: spin 1s linear infinite;
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

  // &:hover::before {
  //   height: 100%;
  // }
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
export default {
  data() {
    return {
      player: null,
      keys: {},
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
      console.log(head)
      this.player = {
        x: pos.x,
        y: pos.y,
        width: head.scrollWidth,
        height: head.scrollHeight,
        accel: 0.1,
        maxSpeed: 5,
        speed: 1,
        rotation: -Math.PI / 2,
      }

      requestAnimationFrame(() => {
        this.update()
        head.classList.add('hidden')
      })
    },
    update() {
      // Update head position
      const player = this.player

      // Check controls
      console.log(this.keys.a)
      if (this.keys.a || this.keys.ArrowLeft) {
        player.rotation -= 0.02
      }
      if (this.keys.d || this.keys.ArrowRight) {
        player.rotation += 0.02
      }
      if (this.keys.w || this.keys.ArrowUp) {
        player.speed += player.accel
      }
      if (this.keys.s || this.keys.ArrowDown) {
        player.speed -= player.accel
      }

      if (player.speed > player.maxSpeed) {
        player.speed = player.maxSpeed
      } else if (player.speed < -player.maxSpeed) {
        player.speed = -player.maxSpeed
      }

      // Add speed
      const addX = this.player.speed * Math.cos(this.player.rotation)
      const addY = this.player.speed * Math.sin(this.player.rotation)

      player.x += addX
      player.y += addY

      this.draw()

      requestAnimationFrame(this.update)
    },
    draw() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      canvas.width = canvas.scrollWidth
      canvas.height = canvas.scrollHeight

      // Draw head
      const player = this.player
      const headImg = this.$refs.head
      ctx.save()
      ctx.translate(player.x + player.width / 2, player.y + player.height / 2)
      ctx.rotate(player.rotation + Math.PI / 2)
      ctx.drawImage(
        headImg,
        -player.width / 2,
        -player.height / 2,
        // 0,
        // 0,
        player.width,
        player.height
      )
      ctx.restore()
    },
    keydown(evt) {
      if (this.player) {
        this.keys[evt.key] = true
      }
    },
    keyup(evt) {
      if (this.player) {
        this.keys[evt.key] = false
      }
    },
  },
}
</script>
