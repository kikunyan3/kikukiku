//ES6

//変数
//ちなみにES6からは var じゃなくて let でかく
var bird = "ひよこ"
console.log(bird + "さんこんにちは");

bird = "にわとり"
console.log(bird + "さんこんにちは");

//定数
const will = "元気でいる"
console.log(will);



//アロー関数
let triangle = (a,b) => {
    console.log(a*b/2);
};
triangle(5,4);

//グローバル変数 ローカル変数
//関数の中で定義するとローカル その関数の中で使える
//外に書くとグローバル どこでも使える

$(function(){
  $("#submit").click(function(e) {
      //ページの再読み込みを止める
      e.preventDefault();
      //入力した郵便番号を取得する
      let post_code = $("#post_code").val();
      console.log(post_code);

      //APIにアクセス  
      let zip_url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${post_code}`
      console.log(zip_url);

      fetch(zip_url)
        //.then(function(responese){
        //    return responese.json();
        //})
        .then(responese => responese.json())
        .then((data) => {
            console.log(data);
            let message = data['message'];

            if(message == null){
                let result = data['results'][0];
                console.log(result);
                
                let result = data['results'][0];
                let prefecture = result['address1'];
                let city = result['address2'];
                let town = result['address3'];
                console.log(prefecture);
                
                $("#prefecture").val(prefecture);
                $("test").text("");
            }else {
                console.log("nullの時");
                $('#test').text("桁数が会いません");
            }
            //$('#test').text(prefecture);
            
        })


  })  
});