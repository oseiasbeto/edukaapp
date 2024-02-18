<template>
    <div ref="dropdown" class="context-menu">
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
    name: "Dropdown",
    data() {
      return {
        showMenu: false,
        top: "0px",
        left: "0px",
      };
    },
    computed: {
    },
    methods: {
      setMenu(top, left) {
        let heightOffset = 142;
        let largestHeight =
          window.innerHeight - this.$refs.menu.offsetHeight - heightOffset;
        let largestWidth = window.innerWidth - this.$refs.menu.offsetWidth - 25;
        if (top > largestHeight) top = largestHeight;
        if (left > largestWidth) left = largestWidth;
        this.top = top + "px";
        this.left = left + "px";
      },
  
      closeMenu() {
        this.showMenu = false;
          const html = document.querySelector("html");
          html.classList.remove("h-o");
        if (this.$parent.closeMenu !== undefined) {
          this.$parent.closeMenu();
        }
      },
  
      openMenu(e) {
        const html = document.querySelector("html");
        html.classList.add("h-o");
  
        this.showMenu = true;
        this.$nextTick(
          function () {
            this.$refs.menu.focus();
            this.setMenu(e.y, e.x);
          }.bind(this)
        );
        e.preventDefault();
      },
    },
  };
  </script>
  
  <style scoped>
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
    box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.06);;
    background-color: #fff;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 6px;
    z-index: 1000;
  }
  .menu:focus {
    outline: none;
  }
  [data-theme="dark"] .menu {
    background: var(--color-secondary-bg);
    backdrop-filter: blur(16px) contrast(120%) brightness(60%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 6px rgba(19, 19, 19, 0.08);
  }
  [data-theme="dark"] .menu .item:hover {
    color: var(--color-text);
  }
  
  @supports (-moz-appearance: none) {
    .menu {
      background-color: var(--color-body-bg) !important;
    }
  }
  
  .menu .item {
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 14px;
    border-radius: 8px;
    color: var(--color-text);
    display: flex;
    align-items: center;
  }
  .menu .item :hover {
    color: var(--color-primary);
    background: #707070;
    transition: opacity 125ms ease-out, transform 125ms ease-out;
  }
  .menu .item:active {
    opacity: 0.75;
    transform: scale(0.95);
  }
  
  .menu .item .material-icons {
    height: 16px;
    width: 16px;
    margin-right: 5px;
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
  .item-infoinfo {
    margin-left: 10px;
  }
  .item-infotitle {
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
  