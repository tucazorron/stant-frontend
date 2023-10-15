import { createRouter, createWebHistory } from "vue-router";
import CreateTalk from "./screens/Talk/CreateTalk.vue";
import ListTalks from "./screens/Talk/ListTalks.vue";
import ScheduleTalks from "./screens/Talk/ScheduleTalks.vue";
import ShowTalk from "./screens/Talk/ShowTalk.vue";
import UploadFile from "./screens/Talk/UploadFile.vue";

const routes = [
    {
        path: "/talks",
        component: ListTalks,
    },
    {
        path: "/talks/new",
        component: CreateTalk,
    },
    {
        path: "/talks/:id",
        component: ShowTalk,
    },
    {
        path: "/talks/upload-file",
        component: UploadFile,
    },
    {
        path: "/talks/schedule",
        component: ScheduleTalks,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
