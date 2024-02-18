<template>
  <div class="academy-modules">
    <div class="academy">
      <Toast />
      <Navbar />
      <Sidebar />

      <main class="epanel-main">
        <Dashboard v-if="this.$route.path == '/epanel'" />
        <Marketplace v-if="this.$route.path == '/epanel/marketplace'" />
        <Profile v-if="this.$route.path == `/epanel/profile/${this.$route.params.id}`" />
        <Balance v-if="this.$route.path == '/epanel/balance'" />
        <MyCourses v-if="this.$route.path == '/epanel/mycourses'" />
        <CreateCourse v-if="this.$route.path == '/epanel/new_course'" />
        <CourseType v-if="this.$route.path == '/epanel/course_type'" />
        <CreateCoursePrice v-if="this.$route.path == '/epanel/new_course/price'" />
        <CreateCourseCover v-if="this.$route.path == '/epanel/new_course/cover'" />
        <ManagerCourse v-if="this.$route.path == `/epanel/course/manager/${this.$route.params.id}`" />
        <CreateLession
          v-if="this.$route.path == `/epanel/course/${this.$route.params.course_id}/${this.$route.params.module_id}/new_lession`" />
        <EditLesson v-if="this.$route.path == `/epanel/course/lesson/${this.$route.params.id}/edit`" />
        <EditModule v-if="this.$route.path == `/epanel/course/module/${this.$route.params.id}/edit`" />
        <Enrollments v-if="this.$route.path == '/epanel/enrollments'" />
        <!--Modals-->
        <NewModule />
        <DeleteCourse />
        <DeleteModule />
        <DeleteLesson />
        <ViewCourse />
        <EditProfile/>
        <EditProfileAvatar/>
        <ViewCourseFromEnrollment/>
      </main>

    </div>

  </div>
</template>
<script>
import { mapState } from "vuex";

//Pages
import Sidebar from "./components/theme/Sidebar.vue";
import Navbar from "./components/theme/Navbar.vue";
import Dashboard from "./pages/dashboard/views/Dashboard.vue";
import Marketplace from "./pages/marketplace/views/Marketplace.vue";
import Balance from "./pages/balance/views/Balance.vue"
import MyCourses from "./pages/mycourses/views/MyCourses.vue"
import CreateCourse from "./pages/mycourses/views/CreateCourse.vue";
import CreateCoursePrice from "./pages/mycourses/views/CreateCoursePrice.vue";
import CreateCourseCover from "./pages/mycourses/views/CreateCourseCover.vue";
import ManagerCourse from "./pages/mycourses/views/ManagerCourse.vue";
import NewModule from "./components/modals/NewModule.vue";
import CreateLession from "./pages/mycourses/views/CreateLession.vue";
import EditModule from "./pages/mycourses/views/EditModule.vue";
import EditLesson from "./pages/mycourses/views/EditLesson.vue";
import Toast from "./components/theme/Toast.vue";
import DeleteModule from "./components/modals/DeleteModule.vue";
import DeleteCourse from "./components/modals/DeleteCourse.vue";
import DeleteLesson from "./components/modals/DeleteLesson.vue";
import Enrollments from "./pages/enrollments/views/Enrollments.vue";
import CourseType from "./pages/mycourses/views/CourseType.vue";
import ViewCourse from "./components/modals/ViewCourse.vue";
import Profile from "./pages/marketplace/views/Profile.vue";
import EditProfile from "./components/modals/EditProfile.vue";
import EditProfileAvatar from "./components/modals/EditProfileAvatar.vue";
import ViewCourseFromEnrollment from "./components/modals/ViewCourseFromEnrollment.vue";

export default {
  components: {
    Sidebar,
    Navbar,
    Dashboard,
    Marketplace,
    Balance,
    MyCourses,
    CreateCourse,
    CreateCoursePrice,
    CreateCourseCover,
    ManagerCourse,
    NewModule,
    CreateLession,
    EditModule,
    EditLesson,
    Toast,
    DeleteModule,
    DeleteCourse,
    DeleteLesson,
    Enrollments,
    CourseType,
    ViewCourse,
    Profile,
    EditProfile,
    EditProfileAvatar,
    ViewCourseFromEnrollment
},
  name: "ModuleView",
  data() {
    return {
      starting: true,
    };
  },
  watch: {

  },
  created() {

  },
  computed: {
    ...mapState(["auth"]),
  },

  methods: {

  },
};
</script>
  
<style scoped>
.page {
  box-sizing: border-box;
}

.dv {
  display: flex;
  flex-direction: column;
}

.epanel-main {
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 230px);
  margin-left: 230px;
  margin-top: 60px;
  box-sizing: border-box;
  padding: 30px;
}

@media(max-width: 767px) {
  .epanel-main {
    width: 100%;
    margin-left: 0px;
    padding: 20px;
  }
}
</style>