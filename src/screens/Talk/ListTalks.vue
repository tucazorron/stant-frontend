<template>
	<div class="centered-container">
		<PageTitle title="Palestras" />
		<div style="display: flex; flex-direction: row;">
			<button type="button" class="btn btn-primary" @click="redirectCreateTalk">
				Criar palestra
			</button>
			<button type="button" class="btn btn-success" @click="redirectSchedule">
				Criar cronograma de palestras
			</button>
			<button type="button" class="btn btn-danger" @click="deleteAllTalks">
				Excluir todas as palestras
			</button>
		</div>
		<div>
			<table class="table table-dark table-striped">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Titulo</th>
						<th scope="col">Duracao</th>
						<th scope="col">Editar</th>
						<th scope="col">Excluir</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="talk in talks" :key="talk.id">
						<td>{{ talk.id }}</td>
						<td>{{ talk.title }}</td>
						<td>{{ talk.duration }}</td>
						<td>
							<a class="icon-link" :href="`/talks/${talk.id}`">
								<i class="fas fa-edit"></i>
							</a>

						</td>
						<td>
							<a class="icon-link" @click="deleteTalk(`${talk.id}`)">
								<i class="fas fa-trash"></i>
							</a>
						</td>

					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
  
<script>
import axios from 'axios';
import { baseUrl } from "../constants";
import PageTitle from '@/components/PageTitle.vue';
export default {
	name: 'ListTalks',
	components: {
		PageTitle
	},
	data() {
		return {
			talks: null,
			dataFetched: false,
		};
	},
	beforeCreate() {
		axios.get(`${baseUrl}/talks`)
			.then((response) => {
				this.talks = response.data;
				this.dataFetched = true;
			})
			.catch((error) => {
				console.error('API request failed:', error);
			});
	},
	methods: {
		deleteTalk(id) {
			axios.delete(`${baseUrl}/talks/${id}`)
				.then((response) => {
					console.log('Palestra deletada:', response.data);
					this.talks = this.talks.filter((talk) => talk.id !== id);
					location.reload();
				})
				.catch((error) => {
					console.error('API request failed:', error);
				});
		},
		deleteAllTalks() {
			axios.delete(`${baseUrl}/talks`)
				.then((response) => {
					console.log('Palestras deletadas:', response.data);
					this.talks = [];
					location.reload();
				})
				.catch((error) => {
					console.error('API request failed:', error);
				});
		},
		redirectSchedule() {
			this.$router.push('/schedule');
		},
		redirectCreateTalk() {
			this.$router.push('/create-talk');
		},
	},
};
</script>
