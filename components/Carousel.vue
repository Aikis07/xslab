<template>
  <ssr-carousel :slides-per-page='6'>
    <div v-for="block in blocks" :key="block.id" class="block mt-10 mb-28">
      <div class="slide">
        <div class="item p-6 border rounded-2xl h-270 hover:shadow-2xl ease-in">
          <h2 class="item__name opacity-40">{{block.name}}</h2>
          <h2 class="item__title text-2xl">{{block.title}}</h2>
          <div class="time flex items-center mt-4">
            <play-icon />
            <p class="time text-sm ml-2">{{block.time}}</p>
          </div>
        </div>
      </div>
    </div>
  </ssr-carousel>
</template>

<script>
import PlayIcon from '@/assets/img/play.svg'

export default {
  data() {
    return {
      blocks: [
        {
          id: 1,
          name: 'Лекция 1',
          title: 'Начало работы',
          time: '00:14:39',
        },
        {
          id: 2,
          name: 'Лекция 2',
          title: 'Продолжаем работу',
          time: '00:14:39',
        },
        {
          id: 3,
          name: 'Лекция 3',
          title: 'Осваиваем фигму.Начинаем работу',
          time: '00:14:39',
        },
        {
          id: 4,
          name: 'Лекция 4',
          title: 'Я запрещаю вам срать',
          time: '00:14:39',
        },
        {
          id: 5,
          name: 'Лекция 5',
          title: 'Дипломная работа и помощь в трудоустройстве',
          time: '00:14:39',
        },
        {
          id: 6,
          name: 'Лекция 6',
          title: 'Защита дипломной работы',
          time: '00:14:39',
        },
        {
          id: 7,
          name: 'Лекция 7',
          title: 'Начало работы',
          time: '00:14:39',
        },
      ]
    }
  },
  components: {
    PlayIcon,
  },
}
</script>

<style lang="scss" scoped></style>