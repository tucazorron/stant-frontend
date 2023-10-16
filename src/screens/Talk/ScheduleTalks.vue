<template>
    <div class="centered-container">
        <PageTitle title="Cronograma das palestras" />
        <div class="buttons-row">
            <button type="button" class="btn btn-light" @click="redirectListTalks">
                Listagem de palestras
            </button>
        </div>
        <div v-for="(track, index) in schedule" :key="index">
            <h2>Track {{ String.fromCharCode(65 + index) }}</h2>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Title</th>
                        <th class="text-right" scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(talk, itemIndex) in track" :key="itemIndex">
                        <td>{{ talk.time }}</td>
                        <td>{{ talk.title }}</td>
                        <td class="text-right">{{ talk.duration }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import { baseUrl } from "../constants";
import PageTitle from "@/components/PageTitle.vue";
export default {
    name: "ScheduleTalks",
    components: {
        PageTitle,
    },
    data() {
        return {
            schedule: null,
            dataFetched: false,
        };
    },
    methods: {
        redirectListTalks() {
            this.$router.push({ name: 'home' });
        },
    },
    beforeCreate() {
        axios.get(`${baseUrl}/schedule`)
            .then((response) => {
                console.log(this.schedule);
                this.schedule = response.data;
                this.dataFetched = true;
            })
            .catch((error) => {
                console.error(error);
                alert('Erro ao buscar cronograma de palestras!')
            });
    },
};
</script>
