<template>
  <div class="system-manage-container">
    <el-collapse v-model="activeName" accordion style="width: 100%;" class="system-manage">
      <el-collapse-item name="1" ref="addressTimeoutRef">
        <template #title>
          <span class="collapse-title">{{ t('label.addressTimeout') }}</span>
        </template>
        {{ 123 }}
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const activeName = ref(1)
const addressTimeoutRef = ref(null)
onMounted(flushISP)

function flushISP(){
  // TODO
}
</script>

<style scoped>
.system-manage-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.system-manage :deep(.el-collapse-item__content){
  margin-top: 15px;
  width: 100%;
}
.collapse-title{
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #343a40;
  font-family:'Times New Roman', Times, serif, Georgia,"Microsoft YaHei",sans-serif;
  text-align: left;
}
</style>