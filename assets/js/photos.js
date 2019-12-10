$(document).ready(function(){
  const photoList = [
    // First column
    {page:"https://flickr.com/photos/candicebao/5520539151",
    static:"https://farm6.static.flickr.com/5014/5520539151_6aaa763662"},
    {page:"https://flickr.com/photos/candicebao/3957682412",
    static:"https://farm3.static.flickr.com/2487/3957682412_f455057601"},
    {page:"https://flickr.com/photos/candicebao/5521127348",
    static:"https://farm6.static.flickr.com/5019/5521127348_350a51dd9d"},
    {page:"https://flickr.com/photos/candicebao/5520533919",
    static:"https://farm6.static.flickr.com/5095/5520533919_154e396e87"},
    {page:"https://flickr.com/photos/candicebao/3238003274",
    static:"https://farm4.static.flickr.com/3378/3238003274_53f7f001e7"},
    {page:"https://flickr.com/photos/candicebao/4597228633",
    static:"https://farm5.static.flickr.com/4018/4597228633_9bcb839595"},
    {page:"https://flickr.com/photos/candicebao/4597228669",
    static:"https://farm4.static.flickr.com/3403/4597228669_65377cc166"},
    {page:"https://flickr.com/photos/candicebao/5520534753",
    static:"https://farm6.static.flickr.com/5171/5520534753_731998630e"},
    {page:"https://flickr.com/photos/candicebao/4597251859",
    static:"https://farm4.static.flickr.com/3412/4597251859_9f95bd01b6"},
    {page:"https://flickr.com/photos/candicebao/4597860800",
    static:"https://farm4.static.flickr.com/3223/4597860800_9eed48a03c"},

    // Second column
    {page:"https://flickr.com/photos/candicebao/5520538445",
    static:"https://farm6.static.flickr.com/5255/5520538445_db36624ac4"},
    {page:"https://flickr.com/photos/candicebao/3624238944",
    static:"https://farm4.static.flickr.com/3659/3624238944_f0f4688a60"},
    {page:"https://flickr.com/photos/candicebao/5520537019",
    static:"https://farm6.static.flickr.com/5219/5520537019_6c91d5ae4b"},
    {page:"https://flickr.com/photos/candicebao/4597254583",
    static:"https://farm2.static.flickr.com/1116/4597254583_7e150afa71"},
    {page:"https://flickr.com/photos/candicebao/4597879978",
    static:"https://farm5.static.flickr.com/4042/4597879978_ca179b8524"},
    {page:"https://flickr.com/photos/candicebao/4597880008",
    static:"https://farm2.static.flickr.com/1279/4597880008_24262c3557"},
    {page:"https://flickr.com/photos/candicebao/4597264375",
    static:"https://farm2.static.flickr.com/1171/4597264375_cd62bd092c"},
    {page:"https://flickr.com/photos/candicebao/4597264397",
    static:"https://farm4.static.flickr.com/3395/4597264397_c2c664845e"},
    {page:"https://flickr.com/photos/candicebao/5520535367",
    static:"https://farm6.static.flickr.com/5091/5520535367_6a6fcb92e2"},
    {page:"https://flickr.com/photos/candicebao/5521305698",
    static:"https://farm6.static.flickr.com/5094/5521305698_0d0d138149"},
  ];

  function displayImages() {
    const maxImagesPerColumn = photoList.length / 2;
    for (i = 0; i < photoList.length; i++) {
      const pageurl = photoList[i].page;
      const imgurl = photoList[i].static + ".jpg";
      const img = `
        <div class="photo_wrapper">
        <a href='${pageurl}'>
        <img src='${imgurl}"' border='0'/>
        </a>
        </div>
      `
      // XXX
      const columnIndex = i >= maxImagesPerColumn ? 0 : 1;
      $(`#photo_column${columnIndex}`).append(img);
    }
  }
  
  displayImages();
});
