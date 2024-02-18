<template>
  <div class="page">
    <header>
      <h1 class="title">Informações básicas</h1>
      <p class="subtitle">Descreve abaixo com cautela como vai ser o seu curso</p>
    </header>
    <div class="body">
      <div class="form">
        <div class="e-group">
          <label for="#title">Título do curso: <span class="required">*</span> </label>
          <input v-model="form.title" id="title" type="text" class="einput">
          <p class="desc">Informe um título chamativo, algo que irá cativar os estudantes a comprarem este curso.</p>
        </div>
        <div class="e-group">
          <label for="#title">Descrição: <span class="required">*</span></label>
          <textarea v-model="form.description" class="einput" style="height: 150px !important;"></textarea>
          <p class="desc">Faça uma breve descrição do seu curso </p>
        </div>
        <div class="e-group">
          <label for="category">Categoria: <span class="required">*</span></label>
          <select v-model="form.category" id="category" class="einput">
            <option value="">-- Selecione --</option>
            <option value="Administração e Negócios">Administração e Negócios</option>
            <option value="Animais de Estimação">Animais de Estimação</option>
            <option value="Arquitetura e Engenharia">Arquitetura e Engenharia</option>
            <option value="Artes e Música">Artes e Música</option>
            <option value="Auto-ajuda e Desenvolvimento Pessoal">Auto-ajuda e Desenvolvimento Pessoal</option>
            <option value="Automóveis">Automóveis</option>
            <option value="Blogs e Redes Sociais">Blogs e Redes Sociais</option>
            <option value="Casa e Jardinagem">Casa e Jardinagem</option>
            <option value="Culinária, Gastronomia, Receitas">Culinária, Gastronomia, Receitas</option>
            <option value="Design e Templates PSD, PPT ou HTML">Design e Templates PSD, PPT ou HTML</option>
            <option value="Edição de Áudio, Vídeo ou Imagens">Edição de Áudio, Vídeo ou Imagens</option>
            <option value="Educacional, Cursos Técnicos e Profissionalizantes">Educacional, Cursos Técnicos e
              Profissionalizantes</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Eletroportáteis">Eletroportáteis</option>
            <option value="Entretenimento, Lazer e Diversão">Entretenimento, Lazer e Diversão</option>
            <option value="Esportes e Fitness">Esportes e Fitness</option>
            <option value="Filmes e Cinema">Filmes e Cinema</option>
            <option value="Geral">Geral</option>
            <option value="Histórias em Quadrinhos">Histórias em Quadrinhos</option>
            <option value="Idiomas">Idiomas</option>
            <option value="Informática">Informática</option>
            <option value="Internet Marketing">Internet Marketing</option>
            <option value="Investimentos e Finanças">Investimentos e Finanças</option>
            <option value="Jogos de Cartas, Poker, Loterias">Jogos de Cartas, Poker, Loterias</option>
            <option value="Jogos de Computador, Jogos Online">Jogos de Computador, Jogos Online</option>
            <option value="Jurídico">Jurídico</option>
            <option value="Literatura e Poesia<">Literatura e Poesia</option>
            <option value="Marketing de Rede">Marketing de Rede</option>
            <option value="Marketing e Comunicação">Marketing e Comunicação</option>
            <option value="Meio Ambiente">Meio Ambiente</option>
            <option value="Moda e vestuário<">Moda e vestuário</option>
            <option value="Moveis e decoração">Moveis e decoração</option>
            <option value="Música, Bandas e Shows">Música, Bandas e Shows</option>
            <option value="Paquera, Sedução e Relacionamentos">Paquera, Sedução e Relacionamentos</option>
            <option value="Perfumaria">Perfumaria</option>
            <option value="Pessoas com deficiência">Pessoas com deficiência</option>
            <option value="Plugins, Widgets e Extensões">Plugins, Widgets e Extensões</option>
            <option value="Produtividade e Organização Pessoal">Produtividade e Organização Pessoal</option>
            <option value="Produtos infantis">Produtos infantis</option>
            <option value="Relatórios, Artigos e Pesquisa">Relatórios, Artigos e Pesquisas</option>
            <option value="Religião e Crenças">Religião e Crenças</option>
            <option value="Romances, Dramas, Estórias e Contos">Romances, Dramas, Estórias e Contos</option>
            <option value="RPG e Jogos de Mesa">RPG e Jogos de Mesa</option>
            <option value="Saúde, Bem-estar e Beleza">Saúde, Bem-estar e Beleza</option>
            <option value="Scripts">Scripts</option>
            <option value="Segurança do Trabalho">Segurança do Trabalho</option>
            <option value="Sexologia e Sexualidade">Sexologia e Sexualidade</option>
            <option value="Snippets (Trechos de Vídeo)">Snippets (Trechos de Vídeo)</option>
            <option value="Trader">Trader</option>
            <option value="Turismo">Turismo</option>
          </select>
          <p class="desc">Informe a categoria do seu curso.</p>
        </div>
        <div class="e-group">
          <label for="#title">O que você vai ensinar? <span class="required">*</span></label>
          <textarea v-model="form.topics" class="einput" style="height: 150px !important;"></textarea>
        </div>
        <div class="e-group">
          <label for="idioma">Idioma: <span class="required">*</span></label>
          <select id="idioma" class="einput">
            <option value="pt">Português</option>
          </select>
          <p class="desc">Informe o idioma do seu curso.</p>
        </div>
        <div class="e-group">
          <label for="#title">Requisitos <span class="required">*</span></label>
          <textarea v-model="form.requirement" class="einput" style="height: 150px !important;"></textarea>
          <p class="desc">Informe quais são os requisitos para se inscrever neste curso.</p>
        </div>
        <div class="e-group">
          <label for="#title">Email de suporte: </label>
          <input v-model="form.emailSupport" id="title" type="text" class="einput">
          <p class="desc">Informe um email de suporte para o seu curso. (opicional)</p>
        </div>
        <!--presence-->
        <div class="e-group" v-if="this.$route.query.format != undefined && this.$route.query.format == 'presence'">
          <label for="#title">Localização: </label>
          <input v-model="form.location" id="title" type="text" class="einput">
          <p class="desc">Informe o local ex: Bairro, Cidade, País</p>
        </div>
        <div class="e-group" v-if="this.$route.query.format != undefined && this.$route.query.format == 'presence'">
          <label for="#title">Data inicial: </label>
          <input v-model="form.dataStart" id="title" type="date" class="einput">
          <p class="desc">Informe a data que dará abertura ao curso</p>
        </div>
        <div class="e-group" v-if="this.$route.query.format != undefined && this.$route.query.format == 'presence'">
          <label for="#title">Data final: </label>
          <input v-model="form.dataEnd" id="title" type="date" class="einput">
          <p class="desc">Informe a data de incerrameto do curso</p>
        </div>
        <div class="e-group" v-if="this.$route.query.format != undefined && this.$route.query.format == 'presence'">
          <label for="#title">Dias de semana úteis: </label>
          <input v-model="form.daysatweek" id="title" type="text" class="einput" placeholder="ex. Seg, Sex">
          <p class="desc">Informe os dias de semana que você dará as aulas presencias</p>
        </div>
        <div class="e-group" v-if="this.$route.query.format != undefined && this.$route.query.format == 'presence'">
          <label>Horário: </label>
          <div class="row" style="    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;">
            <input v-model="form.timeStart" id="title" type="time" class="einput">
            <span style="    font-weight: 400;"> até </span>
            <input v-model="form.timeEnd" id="title" type="time" class="einput">
          </div>
          <p class="desc"></p>
        </div>
        <div class="e-group">
          <label for="#title">Público álvo: </label>
          <textarea v-model="form.target" class="einput" style="height: 150px !important;"></textarea>
          <p class="desc">Informe qual é público álvo deste curso.</p>
        </div>
        <div class="btns">
          <button v-if="this.$route.query.format != undefined && this.$route.query.format == 'presence'"
            @click="nextPage()" class="btn active"
            :disabled="form.title == '' || form.category == '' || form.description == '' || form.location == '' || form.dataStart == '' || form.dataEnd == '' || form.daysatweek == '' || form.timeStart == '' || form.timeEnd == '' || form.target == '' || form.requirement == '' || form.topics == ''">Salvar e
            continuar</button>
          <button v-else @click="nextPage()" class="btn active"
            :disabled="form.title == '' || form.category == '' || form.description == '' || form.target == '' || form.requirement == '' || form.topics == ''">Salvar e
            continuar</button>
          <button @click="cancel" class="btn cancel">Cancelar</button>
        </div>
      </div>
    </div>
    <ScreemLoading :show="loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ScreemLoading from "../../../components/theme/ScreemLoading.vue";

export default {
  name: "CreateCourse",
  computed: {
    ...mapState(["courses"])
  },
  data() {
    return {
      loading: false,
      form: {
        title: "",
        category: "",
        idioma: "pt",
        requirement: "",
        location: "",
        file: "",
        emailSupport: "",
        format: "",
        daysatweek: "",
        description: "",
        topics: "",
        dataStart: "",
        dataEnd: "",
        timeStart: "",
        timeEnd: "",
        target: ""
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
    if (this.courses.newCourse.title != "") {
      Object.assign(this.form, this.$store.state.courses.newCourse)
    } else return
  },
  methods: {
    cancel() {
      this.$store.state.courses.newCourse = {
        title: "",
        category: "",
        description: "",
        price: "",
        idioma: "",
        emailSupport: "",
        file: "",
        topics: "",
        dataStart: "",
        dataEnd: "",
        format: "",
        daysatweek: "",
        requirement: "",
        location: "",
        timeStart: "",
        timeEnd: "",
        target: ""
      }
      this.$router.go(-1)
    },
    nextPage() {
      if (this.form.tile != '' && this.form.category && this.form.description != '') {
        if(this.$route.query.format != undefined) {
          this.form.format =  this.$route.query.format
        } else {
          this.form.format = 'online'
        }
        
        Object.assign(this.$store.state.courses.newCourse, this.form)
        this.loading = true
        setTimeout(() => {
          this.$router.push('/epanel/new_course/price');
        }, 2000);

      } else return
    }
  },
  components: {
    ScreemLoading
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
  font-weight: 400;
  font-size: 85%;
  opacity: 0.8;
  margin-top: 3px;
}

.upload-area {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background-color: #fff;
  font-size: 14px;
  border-radius: 4px;
  border: 1px dashed;
  border-color: #dbdbdb;
}

.selected-image {
  position: relative;
  height: 100%;
}

.selected-image img {
  height: 100%;
  object-fit: cover;
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