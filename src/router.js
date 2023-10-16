import { createRouter, createWebHistory } from "vue-router";
import CreateTalk from "./screens/Talk/CreateTalk.vue";
import ListTalks from "./screens/Talk/ListTalks.vue";
import ScheduleTalks from "./screens/Talk/ScheduleTalks.vue";
import EditTalk from "./screens/Talk/EditTalk.vue";
import UploadFile from "./screens/Talk/UploadFile.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: ListTalks,
    },
    {
        path: "/create-talk",
        name: "create-talk",
        component: CreateTalk,
    },
    {
        path: "/talk/:id",
        name: "edit-talk",
        component: EditTalk,
    },
    {
        path: "/upload-file",
        name: "upload-file",
        component: UploadFile,
    },
    {
        path: "/schedule",
        name: "schedule",
        component: ScheduleTalks,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history',
});

export default router;
