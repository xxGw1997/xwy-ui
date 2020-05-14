<template>
  <button
    class="xwy-button"
    :class="[type?`xwy-button-${type}`:'',{'plain':plain},{'round':round}]"
  >默认按钮</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default() {
        return ''
      }
    },
    plain: {
      type: Boolean,
      default() {
        return false
      }
    },
    round: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.xwy-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
