/*
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-11-30 09:35:34
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 14:51:08
 * @FilePath: /w-plus/play/vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 4444,
  }
});
