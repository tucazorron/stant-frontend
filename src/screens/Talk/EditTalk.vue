<template>
    <div class="centered-container">
        <PageTitle title="Editar Palestra" />
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
    },
    beforeCreate() {
        axios.get(`${baseUrl}/talks/${this.$route.params.id}`)
            .then((response) => {
                console.log(response.data);
                alert('Palestra encontrada com sucesso!')
                this.requestBody = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>