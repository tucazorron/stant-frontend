<template>
	<div class="centered-container">
		<PageTitle title="Palestras" />
		<div class="button-container">
			<NewButton label="Criar Palestra"></NewButton>
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
							<a class="icon-link" href="`/talk/${{ talk.id }}`">
								<i class="fas fa-edit"></i>
							</a>
						</td>
						<td>
							<i class="fas fa-trash"></i>
						</td>

					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
  
<script>
import axios from 'axios';
import NewButton from "@/components/NewButton.vue";
import { baseUrl } from "../constants";
import PageTitle from '@/components/PageTitle.vue';
export default {
	name: 'ListTalks',
	components: {
		NewButton,
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
				console.log('Talks:', this.talks);
				this.dataFetched = true;
			})
			.catch((error) => {
				console.error('API request failed:', error);
			});
	},
};
</script>

  
<style scoped>
.centered-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.title {
	font-size: 3rem;
	margin-bottom: 20px;
}

.button-container {
	display: flex;
}

.button {
	background-color: #007bff;
	color: #fff;
	padding: 10px 20px;
	margin: 0 10px;
	border: none;
	cursor: pointer;
}

.button:hover {
	background-color: #0056b3;
}
</style>
  