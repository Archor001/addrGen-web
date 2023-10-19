<template>
  <div class="addr-apply-container">
    <address-generate @generate="confirmGenerate"></address-generate>

    <!-- Result -->
    <div class="addr-generate-result" v-if="!!isApplied">
      <div class="addr-generate-result-header">{{ !!address ? t('label.addressApplySuccess') : t('label.addressApplyFail') }}</div>
      <el-descriptions :column="2" size="default" border v-if="!!address">
        <el-descriptions-item align="center">
          <template #label>
            <div style="display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 18px;">{{ t('label.address') }}</span>
            </div>
          </template>
          <span style="font-size: 18px;">{{ address }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </div>

  </div>
</template>

<script setup>
import AddressGenerate from '../../components/address/AddressGenerate.vue'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const address = ref('')   // 地址生成结果

// 地址生成
const isApplied = ref(0)
function confirmGenerate(data){
  isApplied.value = true
  address.value = data
}

</script>

<style scoped>
.addr-apply-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addr-generate-result{
  width: 50%;
  margin-top: 20px;
  padding: 30px;
  border-radius: 15px;
}
.addr-generate-result-header{
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
}
</style>
