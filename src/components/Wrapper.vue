<template>
  <a href="#">{{ msg }}</a>
</template>
<script>
export default {
  name: 'Wrapper',
  props: {
    msg: String,
  },
};
</script>
