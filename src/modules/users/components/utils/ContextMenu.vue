<template>
  <div ref="contextMenu" class="context-menu">
    <div
      v-if="showMenu"
      ref="menu"
      class="menu"
      tabindex="-1"
      :style="{ top: top, left: left }"
      @blur="closeMenu"
      @click="closeMenu"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      showMenu: false,
      top: "0px",
      left: "0px",
    };
  },
  computed: {},
  methods: {
    setMenu(top, left) {
      let heightOffset = 100;
      let largestHeight = window.innerHeight - this.$refs.menu.offsetHeight - heightOffset;
      let largestWidth = window.innerWidth - this.$refs.menu.offsetWidth - 25;
      if (top > largestHeight) top = largestHeight;
      if (left > largestWidth) left = largestWidth;
      this.top = top + "px";
      this.left = left + "px";
    },

    closeMenu() {
      this.showMenu = false;
      if (this.$parent.closeMenu !== undefined) {
        this.$parent.closeMenu();
      }
      this.$store.dispatch("actionSetDiasbleScroll", false)
    },

    openMenu(e) {
      this.showMenu = true;
      this.$nextTick(
        function () {
          this.$refs.menu.focus();
          this.setMenu(e.y, e.x);
        }.bind(this)
      );
      e.preventDefault();
      this.$store.dispatch("actionSetDiasbleScroll", true)
    },
  },
};
</script>

<style scoped>
.shade {
  display: flex;
  background: rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 100vh;
  z-index: 1000111;
  padding: 0 30px;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  overflow: hidden;
  transition: all .3s;
}
.context-menu {
  width: 100%;
  height: 100%;
  user-select: none;
}

.menu {
  position: fixed;
  min-width: 136px;
  max-width: 240px;
  list-style: none;
  background: #333;
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  z-index: 1000438;
  -webkit-app-region: no-drag;
  outline: none;
}

.menu .item {
  font-weight: 600;
  font-size: 13px;
  padding: 10px 14px;
  cursor: default;
  color: var(--color-text);
  display: flex;
  align-items: center;
}
.item:hover {
  cursor: pointer;
  color: #fff;
  background: rgba(206, 236, 223, 0.219);
  transition: opacity 125ms ease-out, transform 125ms ease-out;
}
hr {
  margin: 4px 10px;
  background: rgba(128, 128, 128, 0.18);
  height: 1px;
  box-shadow: none;
  border: none;
}
.item-info {
  padding: 10px 10px;
  display: flex;
  align-items: center;
  color: var(--color-text);
  cursor: default;
}
.item-info img {
  height: 38px;
  width: 38px;
  border-radius: 4px;
}
.item-info .info {
  margin-left: 10px;
}
.item-info .title {
  font-size: 16px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
}
.item-info .subtitle {
  font-size: 12px;
  opacity: 0.68;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
}
</style>
