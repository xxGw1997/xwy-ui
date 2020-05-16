<template>
  <button
    class="xwy-button"
    :class="[type?`xwy-button-${type}`:'',{'plain':plain},{'round':round},{'loading':loading},{'disabled':disabled},{'garish':garish},iconRight?'iconRight':'']"
  >
    <i v-if="icon" class="iconfont icon" :class="icon"></i>
    <i v-if="icon && loading" class="iconfont icon" :class="loading?'loading':''"></i>
    <div class="text">
      <slot></slot>
    </div>
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
    },
    icon: {
      type: String,
      default() {
        return ''
      }
    },
    iconRight: {
      type: Boolean,
      default() {
        return false
      }
    },
    loading: {
      type: Boolean,
      default() {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.xwy-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  padding: 0.75em 1.5em;
  border-radius: 0.3em;
  border: 1px solid rgba(128, 128, 128, 0.6);
  user-select: none;
  color: rgba(0, 0, 0, 0.6);
  background: white;
  > .icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.2em;
  }
  > .text {
    order: 2;
  }
  &:focus {
    outline: none;
    color: $--color-primary;
    background: $--color-primary-light-5;
    border: 1px solid $--color-primary-light-5;
  }
  &:hover {
    cursor: pointer;
    color: $--color-primary;
    background: $--color-primary-light-5;
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
  &.iconRight {
    > .icon {
      order: 2;
      margin-left: 0.2em;
      margin-right: 0;
    }
    > .text {
      order: 1;
    }
  }
  &.loading {
    > .icon {
      animation: spin 1.5s infinite linear;
    }
  }
  &.xwy-button-primary {
    color: rgba(255, 255, 255, 0.9);
    background: $--color-primary-light-2;
    border: 1px solid $--color-primary-light-2;
    &:hover {
      color: white;
      background: $--color-primary-light-5;
    }
    &:focus {
      color: white;
      background: $--color-primary-light-5;
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
      background: $--color-success-light-5;
    }
    &:focus {
      color: white;
      background: $--color-success-light-5;
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
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
