var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=510;
block_w=30;
block_h=30;
block_object="";
player_object="";
function player()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set(
            {
                top:player_y,left:player_x
            }
        );
        canvas.add(player_object);
    });
}

function block(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_object=Img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set(
            {
                top:player_y,left:player_x
            }
        );
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if( e.shiftKey==true && keypressed=='80')
    {
        block_w=block_w + 7;
        block_h = block_h+ 7;
        document.getElementById("current_w").innerHTML=block_w;
        document.getElementById("current_h").innerHTML=block_h;

    }
    if( e.shiftKey==true && keypressed=='77')
    {
        block_w=block_w - 7;
        block_h = block_h- 7;
        document.getElementById("current_w").innerHTML=block_w;
        document.getElementById("current_h").innerHTML=block_h;
        
    }
    if( keypressed=='38')
    {
        console.log("up Arrow Key Pressed");

    }

    if( keypressed=='40')
    {
        console.log("down Arrow Key Pressed");
        
    }

    if( keypressed=='37')
    {
        console.log("left Arrow Key Pressed");
        
    }

    if( keypressed=='39')
    {
        console.log("right Arrow Key Pressed");
        
    }

    if( keypressed=='71')
    {
        console.log("g Key Pressed");
        block("ground.png");
    }
    
    if( keypressed=='68')
    {
        console.log("d Key Pressed");
        block("dark_green.png");
    }

    if( keypressed=='84')
    {
        console.log("t Key Pressed");
        block("trunk.jpg");
    }

    if( keypressed=='87')
    {
        console.log("w Key Pressed");
        block("wall.jpg");
    }
    if( keypressed=='89')
    {
        console.log("y Key Pressed");
        block("yellow_wall.png");
    }

    if( keypressed=='85')
    {
        console.log("u Key Pressed");
        block("unique.png");
    }
    
    if( keypressed=='67')
    {
        console.log("c Key Pressed");
        block("cloud.jpg");
    }

    if( keypressed=='82')
    {
        console.log("r Key Pressed");
        block("roof.jpg");
    }

    if( keypressed=='76')
    {
        console.log("l Key Pressed");
        block("light_green.png");
    }

    if( keypressed=='65')
    {
        console.log("a Key Pressed");
        block("abc.png");
    }
}
