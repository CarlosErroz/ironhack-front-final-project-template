// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
    editableTask: "", //será la tarea a editar el contenido
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    
    // Hacer POST
      async postTask(userId,title,description) {
        const {error} = await supabase
        .from("tasks")
        .insert({
          user_id:userId,
          title:title,
          description:description,
        });
        if (error) throw error;
      },

    // Hacer el PUT (edit)
    async updateTask(idValue,title,description) {
      const {error} = await supabase
      .from("tasks")
      .update( {title: title, description: description})
      .eq("id", idValue);
      if (error) throw error;
    },

    // Hacer el delete
      async deleteTask(value) {
        const {error} = await supabase
        .from("tasks")
        .delete()
        .eq("id", value);
        if (error) throw error;
      },

    // Hacer el PUT (cambiar entre completada y pendiente)
      async changeTaskStatus(idValue,value) {
        const {error} = await supabase
        .from("tasks")
        .update( {is_complete: value})
        .eq("id", idValue);
        if (error) throw error;
      },

    // el fetch con filtro
    async fetchTasksFilter(status) {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .eq("is_complete", status)
        .order("id", { ascending: false });
      this.tasks = tasks;
    },

  },
});
