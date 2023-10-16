<template>
    <div class="centered-container">
        <PageTitle title="Upload de arquivo" />
        <div class="buttons-row">
            <button type="button" class="btn btn-primary" @click="redirectCreateTalk">
                Criar palestra
            </button>
            <button type="button" class="btn btn-success" @click="redirectListTalks">
                Listagem de palestras
            </button>
        </div>
        <input type="file" @change="handleFile" />
        <button type="button" class="btn btn-primary" @click="uploadFile()">Upload</button>
    </div>
</template>
  
<script>
import axios from "axios";
import { baseUrl } from "../constants";
import PageTitle from "@/components/PageTitle.vue";
export default {
    name: "UploadFile",
    components: {
        PageTitle,
    },
    data() {
        return {
            file: null,
        }
    },
    methods: {
        handleFile(event) {
            this.file = event.target.files[0];

        },
        uploadFile() {
            const formData = new FormData();
            formData.append('file', this.file);
            axios.post(`${baseUrl}/upload-file`, formData)
                .then((response) => {
                    alert('Arquivo enviado com sucesso!')
                    console.log(response);
                })
                .catch((error) => {
                    alert('Erro ao enviar arquivo!')
                    console.error(error);
                });
        },
        redirectCreateTalk() {
            this.$router.push('/talk/new');
        },
        redirectListTalks() {
            this.$router.push('/');
        },
    },
};
</script>
