<template>
	<div class="centered-container">
		<PageTitle title="Criar Palestra" />
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
			<button type="submit" class="btn btn-primary" @click="createTalk()">Criar palestra</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";
import { baseUrl } from "../constants";
import PageTitle from "@/components/PageTitle.vue";
export default {
	name: "CreateTalk",
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
		createTalk() {
			console.log(this.requestBody)
			axios.post(`${baseUrl}/talks`, this.requestBody)
				.then((response) => {
					alert('Palestra criada com sucesso!')
					console.log(response);
				})
				.catch((error) => {
					alert('Erro ao criar palestra!')
					console.error('API request failed:', error);
				});
		},
	},
};
</script>
