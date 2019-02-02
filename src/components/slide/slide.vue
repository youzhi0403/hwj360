<template>
  <div class="slide">
    <cube-slide :data="items"></cube-slide>
  </div>
</template>

<script>
export default {
  name: 'slide',
  data: function () {
    return {
      items: [
        {
          url: '',
          image: 'http://static.360hwj.com/group1/M00/09/CC/J2zAA1xPtNGARhjTAANznzJzvHY103.jpg'
        },
        {
          url: '',
          image: 'http://static.360hwj.com/group1/M00/09/8B/J2zAA1w2naKAY3jZAAF7W3NwIJ4495.jpg'
        },
        {
          url: '',
          image: 'http://static.360hwj.com/group1/M00/08/F0/J2zAA1vW0t2AbLEeAAORfvqnMoE038.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
