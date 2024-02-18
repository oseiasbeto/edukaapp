<template>
  <transition name="fade">
    <div class="toast" :class="{ show: panel.toast.show, error: panel.toast.role == 'error' }">
      <div class="circle">
        <svg v-if="panel.toast.role != 'error'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24" aria-label="check"
          role="presentation" class="h-icon-light h-features-reviews-section__feature-check-icon"
          style="width: 12px; height: 24px;" fill="currentColor">
          <g>
            <g>
              <path
                d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z">
              </path>
            </g>
          </g>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24" aria-label="cross" role="presentation"
          class="h-icon-danger" style="width: 12px; height: 24px;" fill="currentColor">
          <g>
            <g>
              <path
                d="m11.807 16.415-1.395 1.392a.654.654 0 0 1-.927 0L6 14.324l-3.483 3.483a.657.657 0 0 1-.93 0L.193 16.415a.657.657 0 0 1 0-.93L3.675 12 .193 8.517a.662.662 0 0 1 0-.93l1.394-1.394a.657.657 0 0 1 .93 0L6 9.678l3.485-3.485a.654.654 0 0 1 .927 0l1.395 1.392a.662.662 0 0 1 .002.932L8.324 12l3.483 3.485a.657.657 0 0 1 0 .93Z">
              </path>
            </g>
          </g>
        </svg>
      </div>
      <span>
        {{ panel.toast.text }}
      </span>
    </div>
  </transition>
</template>
  
<script>
import { mapState } from "vuex";

export default {
  name: "Toast",
  computed: {
    ...mapState(["panel"]),
  },
};
</script>
  
<style scoped>
.toast {
  display: flex;
  align-items: center;
  position: fixed;
  top: 64px;
  width: calc(100% - 230px);
  left: 230px;
  height: 60px;
  font-size: 14px;
  background: #ebfffc;
  color: var(--success);
  font-weight: 700;
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  padding: 10px 21px;
  z-index: 111;
  visibility: hidden;
  transform: translate(0px, -64px);
  transition: all .2s;
}

.toast.error {
  color: var(--danger) !important;
  background-color: var(--manager-bg) !important;
}

.toast.show {
  visibility: visible;
  transform: translate(0px, 0px) !important;
  transition: all .2s;
}

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: var(--success);
  color: #fff;
  border-radius: 100px;
  margin-right: 8px;
}
.circle svg {
  width: 12px !important;
  height: 16px !important;
}

.toast.error>.circle {
  background-color: var(--danger);
}
</style>
  