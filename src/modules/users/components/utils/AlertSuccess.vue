<template>
 <div class="pop-success"  :class="{show: success.show}">
      <div class="body">
        <article>
          <p style="font-size: 15px;font-weight: 600;
    font-family: Nunito;">
            {{ success.text }}
          </p>
        </article>
      </div>
    </div>
</template>

<script>
//import { api } from "@/api";
import { mapState } from "vuex";

export default {
  name: "logout",
  data() {
    return {};
  },
  props: {
    success: {
      show: false,
      text: ""
    },
  },
  computed: {
    ...mapState(["User", "optionComment", "feed"]),
  },
  created() {},
  methods: {
    close() {
      this.$emit("closemodal");
    },
  },
};
</script>
<style scoped>
.pop-success {
    position: absolute;
    left: 15%;
    top: 41.661%;
    width: 15rem !important;
    background-color: #198d4c !important;
    font-size: 6px;
    z-index: 1110 !important;
    display: flex;
    color: #fff;
    flex-direction: column;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .3s;
    transform: translate(0%, -154%);
    transition: all .4s;
    padding: 12px 15px;
    border-radius: 6px;
}
.body {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2px;
}
.text-info {
  font-size: 18px;
  margin-bottom: 1rem;

  font-weight: 600;
}
.show {
  visibility: hidden;
  opacity: 1;
   transform: translate(0%,0%);
  -webkit-transition: all .3s;
  transition: all .3s;
}
</style>