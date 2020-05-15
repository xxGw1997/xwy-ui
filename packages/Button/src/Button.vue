<template>
  <button
    class="xwy-button"
    :class="[type?`xwy-button-${type}`:'',{'plain':plain},{'round':round},{'garish':garish}]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'x-button',
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
    },
    garish: {
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
  padding: 0.75em 1.5em;
  border-radius: 0.3em;
  border: 1px solid rgba(128, 128, 128, 0.6);
  user-select: none;
  color: rgba(0, 0, 0, 0.6);
  background: white;
  &:focus {
    outline: none;
    color: $--color-primary-light-2;
    background: $--color-primary-light-8;
    border: 1px solid $--color-primary-light-5;
  }
  &:hover {
    cursor: pointer;
    color: $--color-primary-light-2;
    background: $--color-primary-light-8;
    border: 1px solid $--color-primary-light-5;
  }
  &:active {
    border: 1px solid $--color-primary;
  }
  &.round {
    border-radius: 2em;
  }
  &.garish {
  }
  &.xwy-button-primary {
    color: rgba(255, 255, 255, 0.9);
    background: $--color-primary-light-2;
    border: 1px solid $--color-primary-light-2;
    &:hover {
      color: white;
      background: $--color-primary-light-2;
    }
    &:focus {
      color: white;
      background: $--color-primary-light-2;
    }
    &:active {
      background: $--color-primary;
    }
  }
  &.xwy-button-success {
    color: rgba(255, 255, 255, 0.9);
    background: $--color-success-light-2;
    border: 1px solid $--color-success-light-2;
    &:hover {
      color: white;
      background: $--color-success-light-2;
    }
    &:focus {
      color: white;
      background: $--color-success-light-2;
    }
    &:active {
      background: $--color-success;
    }
  }
  &.xwy-button-warning {
    color: rgba(255, 255, 255, 0.9);
    background: $--color-warning-light-2;
    border: 1px solid $--color-warning-light-2;
    &:hover {
      color: white;
      background: $--color-warning-light-2;
    }
    &:focus {
      color: white;
      background: $--color-warning-light-2;
    }
    &:active {
      background: $--color-warning;
    }
  }
  &.xwy-button-danger {
    color: rgba(255, 255, 255, 0.9);
    background: $--color-danger-light-2;
    border: 1px solid $--color-danger-light-2;
    &:hover {
      color: white;
      background: $--color-danger-light-2;
    }
    &:focus {
      color: white;
      background: $--color-danger-light-2;
    }
    &:active {
      background: $--color-danger;
    }
  }
}
</style>
