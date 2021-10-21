import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// Canvas
const canvas = document.querySelector('canvas.threejs')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x181818)


// BUTTONS

$(".btn1").html("Add Bookshelf")
$( ".btn1" ).click(function( event ) {
    loadBookshelf()
});

$(".btn2").html("Add Book")
$( ".btn2" ).click(function( event ) {
    addBook()
});

function addBook(){
    $('.input1').css({"display": "block"})
    $('.label').css({"display": "block"})
    $('.submitButton').css({"display": "block"})
    $('.dropDown').css({"display": "block"})
    $( ".submitButton" ).click(function( event ) {
        if ($('.input1').val() == '1'){
                    console.log('got the first!')
                    loadLife3()
                }else if ($('.input1').val() == '2'){
                    console.log('got the second!!')
                    loadBadBlood()
                }else if ($('.input1').val() == '3'){
                    console.log('got the third!!')
                    loadPowerBroker()
                }else if ($('.input1').val() == '4'){
                    console.log('got the fourth!!')
                    loadFourthTransformation()
                }
                else if ($('.input1').val() == '5'){
                    console.log('got the fifth!!')
                    loadSiddhartha()
                }
    });
}

let btn3 = document.querySelector('.btn3')
btn3.innerHTML = 'Notes'
btn3.addEventListener('click', notes)
function notes(){
    let notes = document.querySelector('.notes')
    console.log('NOTES!')
    if (notes.style.width == '50%'){
        notes.style.width = '0%'
    }else{
        notes.style.width = '50%'
    }
}

// let header = document.querySelector('.h1')
// header.innerHTML = 'The Medici by Mary Hollingsworth'

// $('.btn3').html('Notes')
// let btn3 = $('.btn3')

// $( ".btn3" ).click(function( event ) {
//     if ($('.notes').css({"width": "0%"})){
//         $('.notes').css({"width": "50%"})
//     }else{
//         $('.notes').css({"width": "0%"})
//     }
// });

// JSON
// $.getJSON("data.json", (data) => {
//     console.log(data)
// })

// $(document).ready(function(){
//     $.getJSON("data.json", function(data){
//         console.log(data.Title); // Prints: Harry
    
//     }).fail(function(){
//         console.log("An error has occurred.");
//     });
// });

// NOTES

let bookTitle = $('h1')
let bookAuthor = $('h3')
let bookNotes = $('#textBox')




$('.btn4').html('Zoom-in')
$('.btn4').click(function(){
    
    camera.translateZ( -.5 );
    camera.translateY( .4 );
    camera.translateX( -1.8);
})

$('.btn5').html('New 3D book')
$('.btn5').click(function(){
    // $('.input1').css({"display": "block"})
    $('.bookPrompt').css({"display": "block"})
    $('.newbookName').css({"display": "block"})
    $('.submitButton2').css({"display": "block"})
    $('.bookAuthor').css({"display": "block"})

    $('.submitButton2').click(function(){
        bookTitle.html($('#newbookName').val())
        bookAuthor.html($('#bookAuthor').val())
        let bookImage = document.createElement('div')
        document.body.appendChild(bookImage)
        let bookCoverImage = $('#bookCover').val()
        let temporaryBookCoverImage = $('#temporaryBookCover').val()
        bookNotes.prepend($('<img>',{id:'theImg',src:temporaryBookCoverImage}))
    })
})




// $.ajax({
//     type: "Get",
//     url: "data.json",
//     dataType: "json",
//     success: function(data) {

//     },
//     error: function(){
//         alert("json not found");
//     }
// });


// JSON

let books = [

    {
        "Title": "The Medici",
        "Author": "Mary Hollingsworth",
        "Notes": "Prologue: A City Under Siege, Florence, Italy, 1530 It is not a great year for Florence. Theyve kicked the Medici out of the city and now find themselves surrounded by armies led by Pope Clement VII who is looking to recapture the city and reinstate the [[Medici]] family's power. Florence is in a very weak position: they are low on food and roughly 200 people are dying per day from starvation. Most shop keepers and workers throughout the city have stopped their work to help fortify the city. The Signoria has ordered the people to provide wood from their homes and even strip wood panels from churches in need of charcoal for their gun powder factories, preparing for defense. The general sentiment of the city is they would rather be poor than be governed by the Medici: Florence in ashes rather than under the Medici. Eventually the city was so helpless they ordered all the private citizens to deposit their jewelry, gold, and silver to the city mint, along with seizing [[Chalices]], crucifixes and other metallic objects from churches––ultimately melting everything down into coin to pay their mercenaries. Eventually Florence surrendered and power was transferred once again to [[Pope Clement VII]] and the [[Medici]] family.MigrantsThe first sign of the [[Medici]] family in Florence was around 1216. The city was quickly growing in population and Florentines were already known for money-making. The Medici family must have been fairly well off already, as they were in the business of money-lending.The Medici were Guelfs. Most of the 1200's were defined by intense rivalry between the Guelfs and Ghibellines, involving constant battles and bloodshed. But by 1293 the Guelfs established their power and an important law was passed called the Ordinance of Justice, making it illegal for any aristocrats or magnates to hold political office. Instead it was the mercantile class and guildsman (bakers, cloth-makers, shopkeepers, bankers, lawyers) who were eligible for office. In 1294, the *Duomo* (now [[Florence Cathedral]]) was proposed, and a few years later the [[Palazzo Vecchio]] began construction. They also knocked down old Ghibelline buildings to clear way for the Piazza de Signoria where political events and elections for the [[Signoria]] were held. The Signoria were made up of 8 members whose names were randomly selected from a bag to serve two-month terms."
    },
    {
        "Title": "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
        "Author": "John Carreyrou",
        "Notes": "In Bad Blood, the Wall Street Journal’s John Carreyrou takes us through the step-by-step history of Theranos, a Silicon Valley startup that became almost mythical, in no small part due to its young, charismatic founder Elizabeth Holmes. In fact, Theranos was mythical for a different reason, because the technological promise it was founded upon—that vital health information could be gleaned from a small drop of blood using handheld devices—was a lie. Carreyrou tracks the experiences of former employees to craft the fascinating story of a company run under a strict code of secrecy, a place where leadership was constantly throwing up smoke screens and making promises that it could not keep. Meanwhile, investors kept pouring in money, turning Elizabeth Holmes into a temporary billionaire. As companies like Walgreens and Safeway strike deals with Theranos, and as even the army tries to get in on the Theranos promise (there’s a brief cameo by James “Mad Dog” Mattis), the plot thickens and the proverbial noose grows tighter. Although I knew how the story ended, I found myself reading this book compulsively. – Chris Schluep"
    },
    {
        "Title": "The Power Broker",
        "Author": "Robert Caro",
        "Notes": "One of the most acclaimed books of our time, winner of both the Pulitzer and the Francis Parkman prizes, The Power Broker tells the hidden story behind the shaping (and mis-shaping) of twentieth-century New York (city and state) and makes public what few have known: that Robert Moses was, for almost half a century, the single most powerful man of our time in New York, the shaper not only of the city's politics but of its physical structure and the problems of urban decline that plague us today. In revealing how Moses did it--how he developed his public authorities into a political machine that was virtually a fourth branch of government, one that could bring to their knees Governors and Mayors (from La Guardia to Lindsay) by mobilizing banks, contractors, labor unions, insurance firms, even the press and the Church, into an irresistible economic force--Robert Caro reveals how power works in all the cities of the United States. Moses built an empire and lived like an emperor. He personally conceived and completed public works costing 27 billion dollars--the greatest builder America (and probably the world) has ever known. Without ever having been elected to office, he dominated the men who were--even his most bitter enemy, Franklin D. Roosevelt, could not control him--until he finally encountered, in Nelson Rockefeller, the only man whose power (and ruthlessness in wielding it) equalled his own."
    },
    {
        "Title": "The Fourth Transformation: How Augmented Reality & Artificial Intelligence Will Change Everything",
        "Author": "Robert Scoble",
        "Notes": "en years from today, the center of our digital lives will no longer be the smart phone, but device that looks like ordinary eyeglasses: except those glasses will have settings for Virtual and Augmented Reality. What you really see and what is computer generated will be mixed so tightly together, that we won’t really be able to tell what is real and what is illusion Instead of touching and sliding on a mobile phone, we will make things happen by moving our eyes or by brainwaves. When we talk with someone or play an online game, we will see that person in the same room with us. We will be able to touch and feel her or him through haptic technology. We won’t need to search online with words, because there will be a new Visual Web 100 times larger than the current Internet, and we will find things by images, buy things by brands, or just by looking at a logo on the jacket of a passerby. Language will be irrelevant, and a merchant in a developing world will have access to global markets. Medical devices will cure schizophrenia, allow quadriplegics to walk. People will be able to touch and feel objects and other people whoare not actually there for conversations, games and perhaps intimate experiences.From Kindergarten to on-the-job, learning will become experiential. Children will visit great battlefields and tour historic places in VR rather than read about them in text books. Med students and surgeons will learn and practice on virtual humans rather than cadavers; oil rig workers will understand how to handle emergencies, before the ever leave the home office. The Fourth Transformation is based on two years of research and about 400 interviews with technologists and business decision makers. It explains the technology and product landscape on a level designed to be interesting and useful to business thinkers and general audiences. Mostly it talks about how VR and AR are already being used, or will be used in the next one-to-three years. It explains how this massive and fundamental transformation will be driven, nit just by Millennials, but by the generation followingthem, which the authors have named the Minecraft Generation.Robert Scoble and Shel Israel have written this book in the hope that it will serve as a business thinker’s guidebook to the near-term future. They hope readers will walk away understanding the massive changes rapidly arising, so that they will navigate a successful course through the changes they will be facing sooner than they—or their competitors-- may realize just yet."
    },
    {
        "Title": "Siddhartha",
        "Author": "Hermann Hesse",
        "Notes": "hough set in a place and time far removed from the Germany of 1922, the year of the book’s debut, the novel is infused with the sensibilities of Hermann Hesse’s time, synthesizing disparate philosophies–Eastern religions, Jungian archetypes, Western individualism–into a unique vision of life as expressed through one man’s search for meaning. It is the story of the quest of Siddhartha, a wealthy Indian Brahmin who casts off a life of privilege and comfort to seek spiritual fulfillment and wisdom. On his journey, Siddhartha encounters wandering ascetics, Buddhist monks, and successful merchants, as well as a courtesan named Kamala and a simple ferryman who has attained enlightenment. Traveling among these people and experiencing life’s vital passages–love, work, friendship, and fatherhood–Siddhartha discovers that true knowledge is guided from within."
    }
]




//Lights


const light = new THREE.DirectionalLight( 0xffffff,3, 100);
const ambientLight = new THREE.AmbientLight( 0xffffff, 1, 100)
ambientLight.position.set(1, 0, 10)
light.position.set(1,0,10)
// // light.castShadow = true
scene.add(ambientLight)
scene.add(light)
// const light = new THREE.DirectionalLight( 0xFFFFFF );
// const helper = new THREE.DirectionalLightHelper( light, 5 );
// scene.add( helper );


//Responsive
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 2




// const helper = new THREE.CameraHelper( camera );
// scene.add( helper );
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true



// Models

function loadBookshelf(){
    const loader = new GLTFLoader();

    loader.load( './models/books/bookshelf.glb', function ( gltf ) {
    
        let bookshelf = gltf.scene
        bookshelf.position.set(-.9,-1.3,0)
        bookshelf.rotation.y = Math.PI
        bookshelf.castShadow = true;
        scene.add( gltf.scene );
    
    }, undefined, function ( error ) {
        console.error( error );
    } );
}


function loadBadBlood(){
    const loader = new GLTFLoader();

    loader.load( './models/books/badblood.glb', function ( gltf ) {
    
        let bookshelf = gltf.scene
        bookshelf.position.set(-.9,-1.3,0)
        bookshelf.rotation.y = Math.PI
        bookshelf.castShadow = true;
        scene.add( gltf.scene );

        bookTitle.html(books[1].Title)
        bookAuthor.html(books[1].Author)
        bookNotes.html(books[1].Notes)
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
}

function loadLife3(){
    const loader = new GLTFLoader();

    loader.load( './models/books/life3.glb', function ( gltf ) {
    
        let bookshelf = gltf.scene
        bookshelf.position.set(-.9,-1.3,0)
        bookshelf.rotation.y = Math.PI
        bookshelf.castShadow = true;
        scene.add( gltf.scene );
        
        
        bookTitle.html(books[0].Title)
        bookAuthor.html(books[0].Author)
        bookNotes.html(books[0].Notes)
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
}


function loadPowerBroker(){
    const loader = new GLTFLoader();

    loader.load( './models/books/powerbroker.glb', function ( gltf ) {
    
        let bookshelf = gltf.scene
        bookshelf.position.set(-.9,-1.3,0)
        bookshelf.rotation.y = Math.PI
        bookshelf.castShadow = true;
        scene.add( gltf.scene );
        
        
        bookTitle.html(books[2].Title)
        bookAuthor.html(books[2].Author)
        bookNotes.html(books[2].Notes)
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
}

function loadFourthTransformation(){
    const loader = new GLTFLoader();

    loader.load( './models/books/fourthtransformation.glb', function ( gltf ) {
    
        let bookshelf = gltf.scene
        bookshelf.position.set(-.9,-1.3,0)
        bookshelf.rotation.y = Math.PI
        bookshelf.castShadow = true;
        scene.add( gltf.scene );
        
        
        bookTitle.html(books[3].Title)
        bookAuthor.html(books[3].Author)
        bookNotes.html(books[3].Notes)
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
}

function loadSiddhartha(){
    const loader = new GLTFLoader();

    loader.load( './models/books/siddhartha.glb', function ( gltf ) {
    
        let bookshelf = gltf.scene
        bookshelf.position.set(-.9,-1.3,0)
        bookshelf.rotation.y = Math.PI
        bookshelf.castShadow = true;
        scene.add( gltf.scene );
        
        
        bookTitle.html(books[4].Title)
        bookAuthor.html(books[4].Author)
        bookNotes.html(books[4].Notes)
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
}






//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// animation
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()