<template>
    <div>
        <input type="file" @change="handleFileUpload" />
    </div>
</template>
  
<script>
export default {
    methods: {
        handleFileUpload(event) {
            const selectedFile = event.target.files[0];
            console.log("Selected file:", selectedFile);
        },
    },
};
</script>
