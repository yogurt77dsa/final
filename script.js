//2

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.height) {
            answer.style.height = "";
        } else {
            answer.style.height = answer.scrollHeight + "px";
        }
    });
});     

//3

const openFormBtn = document.getElementById('openFormBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close-btn');

openFormBtn.addEventListener('click', () => {
    popupForm.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', (event) => {
    event.preventDefault();
    popupForm.style.display = 'none';
});

//4

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F1C40F', '#9B59B6'];
let currentIndex = 0;

document.getElementById('colorButton').addEventListener('click', function() {
    const container = document.getElementById('colorContainer');
    container.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});


//5

function updateDateTime() {
    const now = new Date();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    document.getElementById('dateTime').textContent = `${formattedDate}, ${formattedTime}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
    


const apiKey = 'a184cec28e18696aa72e9629c0f4f09c';
const city = 'Nur-Sultan';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при получении данных: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const description = data.weather[0].description;

        weatherDiv.innerHTML = `
            <h2>Погода в ${data.name}</h2>
            <img src="${iconUrl}" alt="Иконка погоды">
            <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
            <p>Температура: ${data.main.temp} °C</p>
            <p>Ощущается как: ${data.main.feels_like} °C</p>
            <p>Влажность: ${data.main.humidity}%</p>
        `;
        weatherDiv.classList.add('loaded');
    })
    .catch(error => {
        console.error('Ошибка:', error);
        const weatherDiv = document.getElementById('weather');
        weatherDiv.textContent = "Не удалось загрузить данные о погоде.";
        weatherDiv.classList.add('loaded');
    });



        
       
        document.getElementById('applicationForm').addEventListener('keydown', function(event) {
            
            if (event.key === 'Enter') {
                event.preventDefault(); 
                this.submit(); 
            }
        });


         /// callback 
         const handleSubmit = (event) => {
            event.preventDefault(); 
            
            const form = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');

            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries()); 

            
            fetch('https://jsonplaceholder.typicode.com/posts', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data) 
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
                
                formMessage.innerHTML = `<div class="alert alert-success">Thank you, ${data.name}. Your message has been sent successfully!</div>`;
                form.reset(); 
            })
            .catch(error => {
                
                formMessage.innerHTML = `<div class="alert alert-danger">There was an error sending your message. Please try again later.</div>`;
                console.error('There was a problem with the fetch operation:', error);
            });
        };

        
        document.getElementById('contactForm').addEventListener('submit', handleSubmit);


        