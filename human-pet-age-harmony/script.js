document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const petAge = document.getElementById('age').value;
    const petType = document.getElementById('pet').value;
    let humanAge;

    // Conversion logic for different pets to human years
    switch (petType) {
        case 'dog':
            humanAge = petAge * 7;
            break;
        case 'cat':
            if (petAge == 1) {
                humanAge = 15;
            } else if (petAge == 2) {
                humanAge = 24;
            } else {
                humanAge = 24 + (petAge - 2) * 4;
            }
            break;
        case 'canary':
            humanAge = petAge * 5;
            break;
        case 'parrot':
            humanAge = petAge * 4;
            break;
        case 'horse':
            humanAge = petAge * 3;
            break;
        case 'rabbit':
            humanAge = petAge * 6;
            break;
        case 'goldfish':
            humanAge = petAge * 5;
            break;
        case 'guinea_pig':
            humanAge = petAge * 5;
            break;
        case 'pigeon':
            humanAge = petAge * 6;
            break;
        case 'ferret':
            humanAge = petAge * 6;
            break;
        case 'cow':
            humanAge = petAge * 4;
            break;
        case 'buffalo':
            humanAge = petAge * 3.5;
            break;
        case 'chicken':
            humanAge = petAge * 8;
            break;
        case 'deer':
            humanAge = petAge * 3.2;
            break;
        case 'goat':
            humanAge = petAge * 4;
            break;
        case 'tiger':
            humanAge = petAge * 2;
            break;
        case 'leopard':
            humanAge = petAge * 2.5;
            break;
        case 'rhino':
            humanAge = petAge * 2;
            break;
        case 'elephant':
            humanAge = petAge * 1.5;
            break;
        default:
            humanAge = 0;
    }

    document.getElementById('result').innerHTML = `If your ${petType} is ${petAge} years old, in human years, it would be ${humanAge} years old!`;

    // Display the corresponding pet image
    showPetImage(petType);

    // Display the corresponding pet details
    showPetDetails(petType);
});

// Function to show pet image based on the selected pet type
function showPetImage(petType) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; 

    const petImages = {
        dog: 'image/dog.png', 
        cat: 'image/cat.png',
        canary: 'image/canary.png',
        parrot: 'image/parrot.png',
        horse: 'image/horse.png',
        rabbit: 'image/rabbit.png',
        goldfish: 'image/goldfish.png',
        guinea_pig: 'image/guinea-pig.png',
        pigeon: 'image/pigeon.png',
        ferret: 'image/ferret.png',
        
        cow: 'image/cow.png',
        buffalo: 'image/buffalo.png',
        chicken: 'image/chicken.png',
        deer: 'image/deer.png',
        goat: 'image/goat.png',
        tiger: 'image/tiger.png',
        leopard: 'image/leopard.png',
        rhino: 'image/rhino.png',
        elephant: 'image/elephant.png'
    };

    const img = document.createElement('img');
    img.src = petImages[petType] || 'default-image-url.jpg';
    imageContainer.appendChild(img);
}

// Function to show pet details (description, breeds, cost, food)
function showPetDetails(petType) {
    const petDetails = {
        dog: {
            description: "Dogs are loyal companions and often referred to as man's best friend.",
            breeds: "Labrador, German Shepherd, Golden Retriever, Japanese Spitz",
            history: "Domesticated from wolves over 20,000 years ago.",
            cost: "$500 - $3000",
            food: "Dry dog food, raw meat"
        },
        cat: {
            description: "Cats are independent, yet affectionate pets that enjoy human companionship.",
            breeds: "Siamese, Persian, Maine Coon",
            history: "Domesticated in Egypt over 9,000 years ago.",
            cost: "$200 - $1500",
            food: "Wet cat food, fish"
        },
        canary: {
            description: "Canaries are small songbirds known for their singing ability.",
            breeds: "Border Canary, Gloster Canary",
            history: "Domesticated from wild finches in the 17th century.",
            cost: "$50 - $150",
            food: "Seeds, fruits, greens"
        },
        parrot: {
            description: "Parrots are intelligent, colorful birds that can mimic sounds and human speech.",
            breeds: "African Grey, Macaw, Cockatoo",
            history: "Parrots have been companions to humans for centuries, often revered for their intelligence.",
            cost: "$300 - $2000",
            food: "Fruits, seeds, nuts, vegetables"
        },
        horse: {
            description: "Horses are powerful, graceful animals domesticated for transport, work, and companionship.",
            breeds: "Arabian, Thoroughbred, Clydesdale",
            history: "Domesticated around 4000 BC, horses have been used in warfare, agriculture, and transport.",
            cost: "$3000 - $10,000",
            food: "Hay, grass, grains"
        },
        rabbit: {
            description: "Rabbits are small, social animals known for their long ears and soft fur.",
            breeds: "Netherland Dwarf, Lop, Flemish Giant",
            history: "Domesticated over 1400 years ago, rabbits are now common household pets.",
            cost: "$50 - $200",
            food: "Hay, leafy greens, vegetables"
        },
        goldfish: {
            description: "Goldfish are small freshwater fish known for their vibrant color and ease of care.",
            breeds: "Common Goldfish, Fantail, Oranda",
            history: "Originally from East Asia, goldfish were first domesticated over a thousand years ago.",
            cost: "$10 - $50",
            food: "Flake food, pellets, vegetables"
        },
        guinea_pig: {
            description: "Guinea pigs are small, gentle rodents known for their social nature and distinctive squeaks.",
            breeds: "American, Abyssinian, Peruvian",
            history: "Originally from South America, guinea pigs have been domesticated for over 3000 years.",
            cost: "$30 - $60",
            food: "Hay, fresh vegetables, pellets"
        },
        pigeon: {
            description: "Pigeons are social birds known for their ability to navigate long distances.",
            breeds: "Homing Pigeon, Racing Homer, Fantail",
            history: "Pigeons have been used for messaging and companionship for over 5000 years.",
            cost: "$50 - $300",
            food: "Grains, seeds, pellets"
        },
        ferret: {
            description: "Ferrets are curious and playful animals, known for their energy and intelligence.",
            breeds: "Albino, Sable, Silver",
            history: "Domesticated over 2500 years ago, ferrets were originally used for hunting small animals.",
            cost: "$100 - $500",
            food: "Carnivorous diet, raw meat, high-protein food"
        },
        cow: {
            description: "Domesticated for over 10,000 years, used for milk, meat, and labor.",
            breed: "Holstein, Jersey, Angus",
            history: "Domesticated for thousands of years for milk, meat, and labor.",
            cost: "$1,000 - $3,000",
            food: "Grass, hay, grains"
        },
        buffalo: {
            description: " Valued in agriculture for milk and labor, especially in Asia.",
            breed: "River Buffalo, Swamp Buffalo",
            history: "Used for milk and heavy farm work in Asia.",
            cost: "$1,500 - $5,000",
            food: "Grass, aquatic plants"
        },
        chicken: {
            description: "Domesticated for thousands of years, providing eggs and meat.",
            breed: "Leghorn, Rhode Island Red, Brahma",
            history: "Domesticated in Southeast Asia for eggs and meat.",
            cost: "$3 - $20 (chick)",
            food: "Corn, grains, insects"
        },
        deer: {
            description: "Occasionally domesticated for venison or raised on farms.",
            breed: "White-tailed Deer, Red Deer, Mule Deer",
            history: "Domesticated deer are rare, often raised for venison.",
            cost: "Varies greatly",
            food: "Grass, leaves, fruits"
        },
        goat: {
            description: " Domesticated for over 10,000 years, used for milk, meat, and fiber.",
            breed: "Alpine, Nubian, Boer",
            history: "Raised for milk, meat, and fiber for thousands of years.",
            cost: "$100 - $600",
            food: "Grass, shrubs, leaves"
        },
        tiger: {
            description: "A wild, critically endangered predator found in Asia.",
            breed: "Bengal, Siberian",
            history: "Wild animal, often kept in wildlife reserves or zoos.",
            cost: "Not for sale",
            food: "Meat, deer, livestock"
        },
        leopard: {
            description: "A wild, solitary predator found in Africa and Asia.",
            breed: "African Leopard, Amur Leopard",
            history: "Apex predator found in Africa and Asia.",
            cost: "Not for sale",
            food: "Small to medium animals"
        },
        rhino: {
            description: "Critically endangered herbivore, often protected in reserves.",
            breed: "White Rhino, Black Rhino",
            history: "Large herbivores threatened by poaching.",
            cost: "Endangered, conservation efforts ongoing",
            food: "Grass, leaves, shrubs"
        },
        elephant: {
            description: "Used in labor and cultural traditions, primarily in Asia.",
            breed: "African, Asian",
            history: "Used in labor and cultural traditions.",
            cost: "Not for sale, conservation efforts ongoing",
            food: "Grass, fruits, bark"
        }
    };

    const petInfo = petDetails[petType] || {
        description: "Information not available",
        breeds: "N/A",
        history: "N/A",
        cost: "N/A",
        food: "N/A"
    };

    document.getElementById('description').innerText = petInfo.description;
    document.getElementById('breeds').innerText = petInfo.breeds;
    document.getElementById('history').innerText = petInfo.history;
    document.getElementById('cost').innerText = petInfo.cost;
    document.getElementById('food').innerText = petInfo.food;
}
