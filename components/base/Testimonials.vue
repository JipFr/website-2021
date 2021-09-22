<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="testimonials">
    <box class="fw">
      <p class="testimonial-text">
        Jip Frijlink was able to handle transforming my UI designs without any
        issue, even the complex parts that I thought might not be possible.
        Additionally, he completed everything sooner than promised, and
        communication was excellent. A+!
      </p>
      <div class="author">
        <img
          src="https://pbs.twimg.com/profile_images/1416782014490025986/Lm65wxa2_400x400.jpg"
          alt="Gary Simon"
        />
        <div>
          <h3>Gary Simon</h3>
          <p>
            From <nuxt-link to="/designcourse">DesignCourse</nuxt-link> and
            <nuxt-link to="/designcourse-2">DesignCourse part 2</nuxt-link>
          </p>
        </div>
      </div>
    </box>
    <box class="fw">
      <p class="testimonial-text">
        It’s always a pleasure working on a project with Jip! His knowledge of
        scripting and design is fantastic, allowing flexible and streamline
        development. He brings so much to the table with his ability create
        something from the most vague of my ideas, while also being extremely
        open to feedback and learning new things. Highly recommend.
      </p>
      <div class="author">
        <img
          src="https://yt3.ggpht.com/a/AATXAJzyx-g1k1TLoiDwfrt31PvtaOO1OsbKS8id6Kdk0Q=s100-c-k-c0xffffffff-no-rj-mo"
          alt="mcpeachpies"
        />
        <div>
          <h3>mcpeachpies</h3>
          <p>
            From
            <nuxt-link to="/mcpeachpies">mcpeachpies' website</nuxt-link> and 1
            other project
          </p>
        </div>
      </div>
    </box>
    <box>
      <p class="testimonial-text">
        Jip has met every expectation of mine when creating designs. He is also
        extremely flexible and has done so while being provided little
        information
      </p>
      <div class="author">
        <img src="https://i.imgur.com/YEBSSAP.jpg" alt="Alex Tetzlaff" />
        <div>
          <h3>Alex Tetzlaff</h3>
          <p>
            From <nuxt-link to="/heliumargon">HeliumArgon</nuxt-link> and
            MCContent
          </p>
        </div>
      </div>
    </box>
    <box>
      <p class="testimonial-text">
        Provided a smooth website and a custom visual display specifically made
        for my needs for a great price.
      </p>
      <div class="author">
        <img src="https://i.imgur.com/s2wcQYo.png" alt="AoElite" />
        <div>
          <h3>AoElite</h3>
          <p>
            From
            <nuxt-link to="/designcourse">Minecraft Kit Viewer</nuxt-link> and
            <nuxt-link to="/pvp-legacy-website">PvP Legacy</nuxt-link>
          </p>
        </div>
      </div>
    </box>
  </div>
</template>

<style lang="scss" scoped>
.testimonials {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);

  .fw {
    grid-column: 1 / -1;
  }
}

.box {
  display: flex;
  flex-wrap: wrap;
  place-content: space-between;
}

.testimonial-text {
  padding: 10px 0 10px 10px;
  border-left: 2px solid var(--text);
}
.author {
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 4px;
    background: var(--border);
    border: 1px solid var(--border);
  }

  a {
    color: var(--anchor);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 900px) {
  .testimonials {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Import components
import Box from '~/components/layout/Box'

export default {
  components: {
    Box,
  },
}
</script>
