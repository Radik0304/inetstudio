import { createStore } from 'vuex'

export default createStore({
  state: { // список пользователей
    users: [
      { header: 'List' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          score: `<span class="score">current score: <b>6</b></span>`,
          country: "Russia"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          score: `<span class="score">current score: <b>14</b></span>`,
          country: "Russia"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          score: `<span class="score">current score: <b>56</b></span>`,
          country: "USA"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          score: `<span class="score">current score: <b>73</b></span>`,
          country: "USA"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          score: `<span class="score">current score: <b>9</b></span>`,
          country: "Russia"
        },
    ],
    countries: ['russia', 'usa'], // данные для фильтрации по стране
    score: ['> 20', '< 10'],
    selected_country_on_filter: '', //выбранная страна для фильтрации,
    selected_score_on_filter: '',// выбранный счет для фильтрации
  },

  getters: {
    // СОСТОЯНИЯ
    USERS(state) {
      return state.users
    },
    COUNTRIES(state){
      return state.countries
    },
    SCORE(state){
      return state.score
    },
    SELECTED_COUNTRY(state){
      return state.selected_country_on_filter
    },
    SELECTED_SCORE(state){
      return state.selected_score_on_filter
    },
  },

  mutations: {
    /** Мутируем задачи */
    updateTasks(state, data){ 
      state.tasks = data
    },
  },

  actions: {
    /** Получаем список задач */
    async getAllTasks(context) {
      const res = await fetch('http://localhost:3001/tasks')
      const tasks = await res.json()
      if(res.ok){
        context.commit('updateTasks', tasks)
      } else {
        console.log('Ошибка получения данных с сервера')
        throw Error
      }
    },
  },

})
