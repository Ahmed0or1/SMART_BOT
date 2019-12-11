$(document).ready(function(){
    var giphy = "https://api.giphy.com/v1/gifs/search?q=";
    var apiKey = "DY7rcMGmIxH2dRVcrjsyjCdP43urqGan";
    $('#getGIF').click(function(){
        if ($('.Search-GIF-Input').val()== '') {
            return false;
        }
        $('.gifmodal').modal('toggle');
        $('.gifmodal').modal('show');
          let gifv=$('#GIF').val();
          console.log(gifv);
          getWeatherReport(gifv);
          function getWeatherReport(gifv){
              console.log(gifv);
                  $.ajax({
                  url:(giphy+gifv+"&api_key="+apiKey+"&limit=8"),
                  method:"get",
                  dataType:'json',
                      success: function (result, status, xhr){
                          console.log(result);
                          var a =result;
          $('.modal-body img').remove();
                    for (i=0;i<8;i++){ 
                    $('.modal-body').append(`<img src='${a.data[i].images.original.url}' class="img-gif" height="233" width="233">`)
                    
                    }
                    $(".img-gif").on("click",function(){
                        const srcc = this.getAttribute('src');
                        console.log(srcc)
                        $('<div class="message message-personal">' +`<img src='${srcc}' height="333" width="333">` + '</div>').appendTo($('.mCSB_container'));
                        $('.gifmodal').modal('toggle'); 

                    })
  
  },
          error: function (xhr, status, error) {
                   console.log("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
          }
                  });
          };
  });
  });
  