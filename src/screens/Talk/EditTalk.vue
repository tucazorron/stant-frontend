<template>
    <div class="centered-container">
        <PageTitle title="Editar Palestra" />
        <div class="buttons-row">
            <button type="button" class="btn btn-success" @click="redirectListTalks">
                Listagem de palestras
            </button>
            <button type="button" class="btn btn-primary" @click="redirectCreateTalk">
                Criar palestra
            </button>
        </div>
        <form>
            <div class="form-group mb-3">
                <label for="title">Título</label>
                <input v-model="requestBody.title" type="text" class="form-control" id="title"
                    placeholder="Título da palestra">
            </div>
            <div class="form-group mb-3">
                <label for="duration">Duração</label>
                <input v-model="requestBody.duration" type="text" class="form-control" id="duration"
                    placeholder="Duração da palestra">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="editTalk()">Editar palestra</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { baseUrl } from "../constants";
import PageTitle from "@/components/PageTitle.vue";
export default {
    name: "EditTalk",
    components: {
        PageTitle,
    },
    data() {
        return {
            requestBody: {
                title: null,
                duration: null,
            },
        }
    },
    methods: {
        editTalk() {
            axios.put(`${baseUrl}/talks/${this.$route.params.id}`, this.requestBody)
                .then((response) => {
                    alert('Palestra editada com sucesso!')
                    console.log(response);
                })
                .catch((error) => {
                    alert('Erro ao editar palestra!')
                    console.error(error);
                });
        },
        redirectListTalks() {
            this.$router.push('/');
        },
        redirectCreateTalk() {
            this.$router.push('/talk/new');
        },
    },
    beforeCreate() {
        axios.get(`${baseUrl}/talks/${this.$route.params.id}`)
            .then((response) => {
                this.requestBody = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>