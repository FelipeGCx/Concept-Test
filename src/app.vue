<template>
  <Information />
  <TextAreaMultilanguage
    @update="updateReceiver"
    @updateList="updateReceiver"
  />
</template>

<script setup lang="ts">
import TextAreaMultilanguage from "@/components/TextAreaMultilanguage.vue";
import Information from "@/components/Information.vue";
import { MinLanguageData } from "@/types";

const updateReceiver = (value: string | Array<MinLanguageData>) => {
  console.info({ value });
};
</script>

<style scoped></style>
