<template>
    <div class="centered-container">
        <PageTitle title="Editar Palestra" />
        <div class="buttons-row">
            <button type="button" class="btn btn-light" @click="redirectListTalks">
                Listagem de palestras
            </button>
        </div>
        <form @submit.prevent="editTalk()">
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
            <button type="submit" class="btn btn-primary">Editar palestra</button>
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
                    console.log(response);
                    alert('Palestra editada com sucesso!')
                    this.redirectListTalks();
                })
                .catch((error) => {
                    console.error(error);
                    alert('Erro ao editar palestra!')
                });
        },
        redirectListTalks() {
            this.$router.push({ name: 'home' });
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