<template>
    <div class="article-preview">
      <div class="overlay">
        <el-button class="back-button" @click="goBack">返回</el-button>
        <h1>{{ article.title }}</h1>
        <el-image :src="article.coverImg" class="responsive-image"></el-image>
        <div v-html="article.content"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { articleDetailService } from "@/api/article";
  
  const route = useRoute();
  const router = useRouter();
  const article = ref({});
  
  const fetchArticleDetail = async () => {
    try {
      const result = await articleDetailService(route.params.id);
      console.log(result); // 输出结果到控制台
      article.value = result.data; // 确保 data 的结构正确
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  };
  
  onMounted(() => {
    fetchArticleDetail();
  });
  
  const goBack = () => {
    router.push({ name: 'ArticleManage' });
  }
  </script>
  
  <style scoped>
  .article-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 15px;
  }
  
  .overlay {
    position: relative;
    width: 90%;
    background-color: #73725741; /* 低饱和度橙色 */
    color: white;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto; /* Add this to make the content scrollable if it overflows */
    max-height: 100vh; /* Ensures the overlay does not exceed the viewport height */
    border-radius: 15px; /* 添加圆角 */
  }
  
  .back-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .responsive-image {
    width: 50%; /* Ensure the image does not exceed half of the overlay's width */
    height: auto;
    margin-bottom: 20px;
  }
  </style>