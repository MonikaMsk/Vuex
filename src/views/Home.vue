<template>
  <div >
   <films title="Studio Ghibli's Films"></films>

  </div>
</template>

<script>
import Films from '../components/Films'

export default {
  name: 'Home',
  components: {
   'films': Films
  }
}
</script>

