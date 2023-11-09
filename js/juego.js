let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');

// getting bird element properties
let bird_props = bird.getBoundingClient();

// This method returns DOMReact -> top, right, bottom, left, x, y, width and height
let iconpa = document.querySelector('.iconpa').getBoundingClient();

let puntaje_val = document.querySelector('.puntaje_val');
let mensaje = document.querySelector('.mensaje');
let puntaje_titulo = document.querySelector('.puntaje_titulo');

let game_state = 'Start';
img.style.display = 'none';
mensaje.classList.add('mensajeStyle');

document.addEventListener('keydown', (e) => {
    
    if(e.key == 'Enter' && game_state != 'Play'){
        document.querySelectorAll('.tubos').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        mensaje.innerHTML = '';
        puntaje_titulo.innerHTML = 'Score : ';
        puntaje_val.innerHTML = '0';
        mensaje.classList.remove('mensajeStyle');
        play();
    }
});

function play(){
    function move(){
        if(game_state != 'Play') return;

        let tubos = document.querySelectorAll('.tubos');
        tubos.forEach((element) => {
            let tubos_props = element.getBoundingClient();
            bird_props = bird.getBoundingClient();

            if(tubos_props.right <= 0){
                element.remove();
            }else{
                if(bird_props.left < tubos_props.left + tubos_props.width && bird_props.left + bird_props.width > tubos_props.left && bird_props.top < tubos_props.top + tubos_props.height && bird_props.top + bird_props.height > tubos_props.top){
                    game_state = 'End';
                    mensaje.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
                    mensaje.classList.add('mensajeStyle');
                    img.style.display = 'none';
                    sound_die.play();
                    return;
                }else{
                    if(tubos_props.right < bird_props.left && tubos_props.right + move_speed >= bird_props.left && element.increase_score == '1'){
                        puntaje_val.innerHTML =+ puntaje_val.innerHTML + 1;
                        sound_point.play();
                    }
                    element.style.left = tubos_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity(){
        if(game_state != 'Play') return;
        bird_dy = bird_dy + grativy;
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'imagenes/Bird-2.png';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'imagenes/Bird.png';
            }
        });

        if(bird_props.top <= 0 || bird_props.bottom >= iconpa.bottom){
            game_state = 'End';
            mensaje.style.left = '28vw';
            window.location.reload();
            mensaje.classList.remove('mensajeStyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClient();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let seperation = 0;

    let gap = 35;

    function create(){
        if(game_state != 'Play') return;

        if(seperation > 115){
            seperation = 0;

            let posi = Math.floor(Math.random() * 43) + 8;
            let tubos_inv = document.createElement('div');
            tubos_inv.className = 'tubos';
            tubos_inv.style.top = posi - 70 + 'vh';
            tubos_inv.style.left = '100vw';

            document.body.appendChild(tubos_inv);
            let tubos = document.createElement('div');
            tubos.className = 'tubos';
            tubos.style.top = posi + gap + 'vh';
            tubos.style.left = '100vw';
            tubos.increase_score = '1';

            document.body.appendChild(tubos);
        }
        seperation++;
        requestAnimationFrame(create);
    }
    requestAnimationFrame(create);
}
