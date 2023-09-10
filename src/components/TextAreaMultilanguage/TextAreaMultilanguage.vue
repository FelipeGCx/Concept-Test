<script setup lang="ts">
import { ref } from "vue";
import { LanguageData, MinLanguageData } from "@/types";
import { languagesValues } from "./languagesValues";

interface Emits {
  (e: "update", value: string): void;
  (e: "updateList", value: Array<MinLanguageData>): void;
}
const emit = defineEmits<Emits>();

const currentItem = ref(languagesValues.value[0]);
const changeLanguage = () => {
  const index = languagesValues.value.findIndex(
    (e) => e.locale === currentItem.value.locale
  );
  currentItem.value =
    index + 1 >= languagesValues.value.length
      ? languagesValues.value[0]
      : languagesValues.value[index + 1];
};
const updatedValue = () => {
  emit("update", currentItem.value.value);
  const languageItem = languagesValues.value.map((item: LanguageData) => {
    const { locale, value } = item;
    return { locale, value };
  });
  emit("updateList", languageItem);
};
</script>
<template>
  <div class="note-container">
    <h1>{{ currentItem.description }}</h1>
    <button @click="changeLanguage">
      <component class="flag" :is="currentItem.flag"></component>
    </button>
    <textarea
      name="note"
      id="note"
      cols="30"
      rows="10"
      v-model="currentItem.value"
      @change="updatedValue"
      :placeholder="currentItem.placeholder"
    ></textarea>
  </div>
</template>

<!-- wiht scss -->
<styles lang="scss" scoped src="./styles/scss.scss" />
<!-- with tailwind -->
<!-- <styles lang="scss" scoped src="./styles/tailwind.scss"/>  -->
