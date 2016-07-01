$(function(){ 
    $('#restart').hide();
//World - playfield
    var world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2,2,1,1,1,1,1,1,1,1,2,2],
        [2,2,1,1,2,1,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,1,1,2,2,1,1,1,2,2,1,1,1,1,1,1,2,1,1,2,2],
        [2,2,1,1,2,1,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,1,1,2,2,1,1,1,1,2,2,1,2,2,2,1,2,1,1,2,2],
        [2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2,2,1,2,2,2,1,2,1,1,2,2],
        [2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,2],
        [2,2,1,1,2,1,1,2,2,1,1,2,2,2,2,1,1,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,2,2],
        [2,2,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,2,2],
        [0,0,1,1,2,1,1,2,2,1,1,2,2,2,1,1,1,2,2,2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,0,0],
        [0,0,1,1,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,0,0],
        [2,2,1,1,1,1,1,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,2,2],
        [2,2,2,2,2,2,2,2,2,1,1,2,2,1,1,1,1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,1,1,1,1,2,2],
        [2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,0,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,2,2],
        [2,2,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,2,1,1,2,2,2,2,2,1,2,2],
        [2,2,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,2,2],
        [2,2,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,2,2,2,2,1,2,2,2,1,2,2],
        [2,2,1,1,2,2,1,1,2,1,1,2,2,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
        [2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ];
    function displayWorld(){
        var output = '';
        for(var i=0; i<world.length; i++){
            output += '<div class="row">'
            for(var j=0; j<world[i].length; j++){
                if(world[i][j] === 2) {
                    output += '<div class="brick"></div>';
                }else if(world[i][j] === 1) {
                    output += '<div class="coin"></div>';
                }else if(world[i][j] === 0) {
                    output += '<div class="empty"></div>';
                }else {
                    alert('something went wrong!');
                }
            }
            output += '</div>';
        }
        $('#worldWrap').html(output);
    }
    displayWorld();
        
//Pacman
    var pacman = {
        x: 0,
        y: 0
    };
    
    function displayPacman(){
        $('#pacman').css({'top': 260+pacman.x*20+'px', 'left': 420+pacman.y*20+'px'});
    }
    displayPacman();
   
//Move pacman and get scores up 
    var score = 0;
    function changeScore(){
        $('#scoreBar').html(score);
    }
    changeScore();
    var ghostTop = $('#ghost0').css('top');
    var ghostLeft = $('#ghost0').css('left');
    
    $('.c1').click(function(){
        $(this).add($('#veil')).css('visibility','hidden');
        $('body').css('background','white');
        
        $(document).on('keydown', function(event){
            var keyCode = event.which;
            var pacmanTop = $('#pacman').css('top');
            var pacmanLeft = $('#pacman').css('left');
            var ghostTop = $('#ghost0').css('top');
            var ghostLeft = $('#ghost0').css('left');
            var m = pacmanLeft.localeCompare(ghostLeft);
            var n = pacmanTop.localeCompare(ghostTop);
            
            if(keyCode === 37 && world[pacman.x+13][pacman.y+20] !== 2) {
                pacman.y--;
                $('#pacman').addClass('leftRotate').removeClass('upRotate').removeClass('downRotate');
                displayPacman();
            }
            else if(keyCode === 38 && world[pacman.x+12][pacman.y+21] !== 2) {
                pacman.x--; $('#pacman').addClass('upRotate').removeClass('leftRotate').removeClass('downRotate');
                displayPacman();
            }
            else if(keyCode === 39 && world[pacman.x+13][pacman.y+22] !== 2) {
                pacman.y++;
                $('#pacman').removeClass('leftRotate').removeClass('upRotate').removeClass('downRotate');
                displayPacman();
            }
            else if(keyCode === 40 && world[pacman.x+14][pacman.y+21] !== 2) {
                pacman.x++;
                $('#pacman').addClass('downRotate').removeClass('leftRotate').removeClass('upRotate');
                displayPacman();
            }
            if(world[pacman.x+13][pacman.y+21] === 1) {
                world[pacman.x+13][pacman.y+21] = 0;
                displayWorld();
                score += 10;
                changeScore();
            }
            console.log(pacmanLeft,pacmanTop,ghostLeft,ghostTop);
//            var pacmanTop = $('#pacman').css('top');
//            var pacmanLeft = $('#pacman').css('left');
//            var ghostTop = $('#ghost0').css('top');
//            var ghostLeft = $('#ghost0').css('left');
            var m = $('#pacman').css('left').localeCompare($('#ghost0').css('left'));
            var n = $('#pacman').css('top').localeCompare($('#ghost0').css('top'));
            
            if(m === 0 && n ===0) {
                $('#veil').css('visibility','visible');
                $('#restart').show();
            }
        })
    })
    
    $('#restart span').on('click', function(){
        location.reload(true);
    })
})







