import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import GameRun from "./components/games/GameRun.vue";
import SpeedGame from "./components/games/SpeedGame.vue";
import IdkGame from "./components/games/IdkGame.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/gameRun", name: "gameRun", component: GameRun },
        { path: "/SpeedGame", name: "SpeedGame", component: SpeedGame },
        { path: "/IdkGame", name: "IdkGame", component: IdkGame },
    ],
});

createApp(App).use(router).mount("#app");
