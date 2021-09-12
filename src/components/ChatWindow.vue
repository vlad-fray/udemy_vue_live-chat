<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents" ref="messages">
      <div class="single" v-for="doc in formatedDocs" :key="doc.id">
        <span class="created-at">{{ doc.time }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref } from "@vue/reactivity";
import { onUpdated } from "@vue/runtime-core";
export default {
  setup() {
    const { error, documents } = getCollection("messages");

    const formatedDocs = computed(() => {
      if (documents.value)
        return documents.value.map((doc) => {
          const time = formatDistanceToNow(doc.createdAt.toDate());
          return {
            ...doc,
            time,
          };
        });
    });

    //auto-scroll messages
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, messages, formatedDocs };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>