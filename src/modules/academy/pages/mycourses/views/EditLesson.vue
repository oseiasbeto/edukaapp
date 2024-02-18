<template>
  <div class="page">
    <header>
      <h1 class="title">Editar aula</h1>
      <p class="subtitle">Define um título e insira o conteúdo que será visualizado pelos seus alunos</p>
    </header>
    <div class="body">
      <div class="form">
        <div class="e-group">
          <label for="title">Nome: <span class="required">*</span> </label>
          <input v-model="form.title" id="title" type="text" class="einput">
        </div>

        <div class="e-group">
          <label for="#title">Descrição: </label>
          <textarea v-model="form.description" class="einput" style="height: 150px !important;"></textarea>
        </div>
        <div class="e-group">
          <label for="idioma">Idioma: <span class="required">*</span></label>
          <select id="idioma" class="einput">
            <option value="pt">Português</option>
          </select>
          <p class="desc">Informe o idioma desta aula.</p>
        </div>
        <div class="btns">
          <button @click="editLesson()" class="btn active" :disabled="form.title == '' ">Salvar
            alterações</button>
          <button @click="cancel" class="btn cancel">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { api } from "@/api";
import { mapState } from "vuex";

export default {
  name: "CreateCourse",
  computed: {
    ...mapState(["courses"])
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        videoUrl: "",
        idioma: "pt"
      },
      errors: {
        file: {
          show: false,
          message: ""
        }
      }
    }
  },
  created() {
    this.getCurrentLesson()
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    async getCurrentLesson() {
      if (this.$route.params.id) {
        try {
          const res = await api.get(`users/lesson/${this.$route.params.id}`)
          if(res.status == 200) {
            Object.assign(this.form, res.data.lession)
          }
        } catch (err) {
          console.log(err.message)
        }
      } else return
    },
    async editLesson() {
      if (this.form.title != '') {
        try {
          const res = await api.put(`courses/lesson/${this.$route.params.id}`, this.form)
          if (res.status == 200) {
            this.$router.go(-1)
            this.$store.dispatch("actionSetToast", "Feito", "success")
          }
        } catch (err) {
          console.log(err.message)
        }
      } else return
    }
  },
  components: {

  }
};
</script>
    
<style scoped>
.page {
  color: #333;
}

header {
  margin-bottom: 24px;
}

h1 {
  font-size: 32px;
  font-weight: 500;
  color: #333;
  padding-right: 30px
}

.subtitle {
  opacity: .75;
  font-weight: 400;
}

/*Body style */
.fast-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
}

.body {
  width: 50%;
}

.e-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  padding: 4px 0;
}

.required {
  color: #f14668;
}

.error {
  color: #f14668 !important;
  border-color: #f14668 !important;
}

.desc {
  display: flex;
  font-weight: 400;
  font-size: 85%;
  opacity: 0.8;
  margin-top: 3px;
}

.desc svg {
  margin-right: 4px;
  opacity: .3;
}

.btns button {
  margin-right: .75rem;
}
@media(max-width: 767px) {
  .body {
    width: 100%;
  }
}
</style>