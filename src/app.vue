<template>
  <Information />
  <TextAreaMultilanguage
    @update="updateReceiver"
    @updateList="updateReceiver"
  />
</template>

<script setup lang="ts">
import TextAreaMultilanguage from "@/components/TextAreaMultilanguage/TextAreaMultilanguage.vue";
import Information from "@/components/Information.vue";
import { MinLanguageData } from "@/types";

const updateReceiver = (value: MinLanguageData | Array<MinLanguageData>) => {
  console.table(value);
};
</script>

<style scoped></style>
