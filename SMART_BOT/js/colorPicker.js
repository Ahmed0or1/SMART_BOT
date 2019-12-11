$(document).ready(function(){
        // background
        $('#colorpickerch').click(function(){
          let Rcolor=$('#colorpicker1').val();
          let Lcolor=$('#colorpicker2').val();
            // console.log("Right color:"+Rcolor);
            // console.log("Left color:"+Lcolor);
            $("body").css({
              "background": `linear-gradient(135deg,${Lcolor},${Rcolor})`
            })
        });
         // message-bot
        $('figure').click(function(){
          let R1color=$('#colorpicker1').val();
          let L1color=$('#colorpicker2').val();
            $(".message-bot").css({
              "background": `linear-gradient(120deg,${L1color},${R1color})`
            })
        })
        // message-personal
        $('.user-icon').click(function(){
          let R2color=$('#colorpicker1').val();
          let L2color=$('#colorpicker2').val();
            $(".message-personal").css({
              "background": `linear-gradient(120deg,${L2color},${R2color})`
            })
        })
        //  chat title and message Box
        $('.box-icon').click(function(){
          let R2color=$('#colorpicker1').val();
          let L2color=$('#colorpicker2').val();
            $(".chat-title").css({
              "background": `${L2color}`
              
            })
            $(".messages-content").css({
              "background": `${R2color}`

            })
        })
    });