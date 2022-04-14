//import Quill from 'quill';
//import { ImageResize } from 'quill-image-resize-module';

//Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageUploader', ImageUploader);

const quill = new Quill( "#description", {
    theme: "snow", // 模板
    placeholder: '寫下產品描述',
    modules: {
        imageResize: {
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ] //調整圖像大小 顯示像素大小 圖像對齊工具
            //See optional "config" below
        },
        toolbar: [
            // 工具列列表[註1]
            ['bold', 'italic', 'underline', 'strike'], // 粗體、斜體、底線和刪節線
            ['blockquote', 'code-block'], // 區塊、程式區塊
            [{ 'header': 1 }, { 'header': 2 }], // 標題1、標題2
            [{ 'list': 'ordered'}, { 'list': 'bullet' }], // 清單
            //[{ 'script': 'sub'}, { 'script': 'super' }], // 上標、下標
            //[{ 'indent': '-1'}, { 'indent': '+1' }], // 縮排
            //[{ 'direction': 'rtl' }], // 文字方向
            //[{ 'size': ['small', false, 'large', 'huge'] }], // 文字大小
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],// 標題
            [{ 'color': [] }, { 'background': [] }], // 顏色      
            ['link', 'image'],      
            //[{ 'font': [] }], // 字體
            //[{ 'align': [] }], // 文字方向
            [ 'clean' ] // 清除文字格是            
        ],
        imageUploader: {
            upload: (file) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(
                    'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  );
                }, 1000);
              });
            },
        },
    }
});
