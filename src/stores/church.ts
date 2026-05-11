import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChurchStore = defineStore('church', () => {
  const name = ref('North Point Ministries')
  const fileName = ref('npm')
  const color = ref('')

  function selectChurch(
    churchName: string,
    churchFileName: string,
    churchColor: string,
  ) {
    name.value = churchName
    fileName.value = churchFileName
    color.value = churchColor
  }

  return { name, fileName, color, selectChurch }
})
