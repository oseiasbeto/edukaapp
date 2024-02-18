<template>
  <div class="page">
    <header>
      <h1 class="title">Editar módulo</h1>
      <p class="subtitle">Define um título e insira o conteúdo que será visualizado pelos seus alunos</p>
    </header>
    <div class="body">
      <div class="form">
        <div class="e-group">
          <label for="title">título: <span class="required">*</span> </label>
          <input v-model="form.title" id="title" type="text" class="einput">
        </div>

        <div class="e-group">
          <label for="#title">Descrição: </label>
          <textarea v-model="form.description" class="einput" style="height: 150px !important;"></textarea>
        </div>

        <div class="e-group">
          <label for="freeAfterDays">Acesso após a compra: <span class="required">*</span></label>
          <select v-model="form.freeAfterDays" id="freeAfterDays" class="einput">
            <option :value="null">Imediato</option>
            <option :value="1">1 dia</option>
            <option :value="2">2 dias</option>
            <option :value="3">3 dias</option>
            <option :value="4">4 dias</option>
            <option :value="5">5 dias</option>
            <option :value="6">6 dias</option>
            <option :value="7">7 dias</option>
          </select>
          <div class="desc">
            <p v-if="form.freeAfterDays == null">Nesta opção, este módulo estará acesível logo após o estudante fazer
              compra.</p>

            <p v-else>Nesta opção, este módulo estará acessível em até {{ form.freeAfterDays }} dia(s) após a compra.
            </p>
          </div>
        </div>
        <div class="e-group">
          <label for="idioma">Idioma: <span class="required">*</span></label>
          <select id="idioma" class="einput">
            <option value="pt">Português</option>
          </select>
          <p class="desc">Informe o idioma deste módulo.</p>
        </div>
        <div class="btns">
          <button @click="editarModule()" class="btn active" :disabled="form.title == ''">Editar
            módulo</button>
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
  name: "EditModule",
  computed: {
    ...mapState(["courses"])
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        freeAfterDays: null,
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
    this.form = {
      title: "",
      description: "",
      freeAfterDays: null,
      idioma: ""
    }
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    async editarModule() {
      if (this.form.title != '') {
        try {
          const res = await api.put(`courses/module/${this.$route.params.id}`, this.form)
          if (res.status == 200) {
            this.$router.go(-1)
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