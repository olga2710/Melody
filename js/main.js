const buttonUp = document.querySelector('.conter-up');
const buttonDown = document.querySelector('.counter-down');
const homeItems = document.querySelectorAll('.home-item');
const counter = document.querySelector('.counter');
let homeFloor = [];
let changeFloor = counter.innerText;

function clearFloor (homeItems){
    homeItems.forEach(homeItem =>{
        homeItem.classList.remove('home-active');  });
}

function beautyCounter(changeFloor){
    if (changeFloor>=10){
        return counter.innerText=changeFloor;
    } else{
        return counter.innerText= '0'+changeFloor;
    };;
}

function disabledButton(){
    if (changeFloor==homeFloor.length){
        buttonUp.classList.add('hover-button');
    } else{
        buttonUp.classList.remove('hover-button');
    }
    if (changeFloor==1){
        buttonDown.classList.add('hover-button');
    }else{
        buttonDown.classList.remove('hover-button');
    }
}


disabledButton();

if (changeFloor[0]==0){
    changeFloor=changeFloor[1];
}
changeFloor=Number(changeFloor);

homeItems.forEach(homeItem =>{
    homeFloor.push(homeItem);
});
homeItems.forEach(homeItem =>{
    homeItem.addEventListener('click', ()=>{
        clearFloor (homeItems);
        for (let i=0; i<homeFloor.length; i++){              
        homeItem.classList.add('home-active');
            if (homeFloor[i]==homeItem){
                changeFloor = i+1;
                counter.innerText=beautyCounter(changeFloor);
                disabledButton();
            }     
        };
    
    });
});

buttonDown.addEventListener('click', ()=>{
    
    if (changeFloor>1){
        clearFloor (homeItems);
        changeFloor=changeFloor-1;
        counter.innerText=beautyCounter(changeFloor);
    
        homeItems.forEach(homeItem=>{
            if (homeItem==homeFloor[changeFloor-1]){
                homeItem.classList.add('home-active');
                disabledButton();
            }
        });      
    };
    
});

buttonUp.addEventListener('click',()=>{
    
    if (changeFloor<17){
        clearFloor (homeItems);
        changeFloor=changeFloor+1;
        counter.innerText=beautyCounter(changeFloor);

        homeItems.forEach(homeItem=>{
            if (homeItem==homeFloor[changeFloor-1]){
                homeItem.classList.add('home-active');
            };
        });

    };
    disabledButton();
});

homeItems.forEach(homeItem=>{
    homeItem.addEventListener('mouseover', ()=>{
        let countFloor = changeFloor;
        for (let i=0; i<homeFloor.length; i++){              
            if (homeFloor[i]==homeItem){
                countFloor = i+1;
                counter.innerText=beautyCounter(countFloor);
            }     
        };
    });
    homeItem.addEventListener('mouseout', ()=>{
                counter.innerText=beautyCounter(changeFloor);
    });
});

//modal window


const btnOpenWindow = document.querySelector('.button-primery');
const modal = document.querySelector('.modal');
const modalNum = document.querySelector('.floor-num');
const closeBtn = document.querySelector('.close-modal');
const flats = document.querySelectorAll('.flat-area');
const arrayFlats = [];
const flatsLinks = document.querySelectorAll('.floor-link');
const arrayFlatLinks = [];
let indexFlat=0;
function clearFlat (){
    flatsLinks.forEach(link=>{
        link.classList.remove('floor-link-active');
        if (link.classList.contains('disable-link')){
            link.pointerEvents = "none";
            link.href='#';
        }
        
    });
    flats.forEach(flat=>{
        flat.classList.remove('flat-active');
    });

}

flats.forEach((flat)=>{
    arrayFlats.push(flat)
});

flatsLinks.forEach((link)=>{
    arrayFlatLinks.push(link);
});

btnOpenWindow.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    modal.classList.add('active');   
    modalNum.innerText=changeFloor;
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    modal.classList.remove('active'); 
});

flatsLinks.forEach((link)=>{
    link.addEventListener('mouseover',()=>{
        clearFlat();
        for (let i =0; i<arrayFlatLinks.length; i++){
            if (link==arrayFlatLinks[i]){
                indexFlat=i;
            }
        }
        link.classList.add('floor-link-active');
        flats.forEach(flat =>{
            if (flat==arrayFlats[indexFlat]){
                flat.classList.add('flat-active');
            }
        })
    })
});

flats.forEach(flat =>{
    flat.addEventListener('mouseover', ()=>{
        clearFlat();
        for (let i=0; i<arrayFlats.length; i++){
            if (flat == arrayFlats[i]){
                indexFlat=i;
            }
        }
        flat.classList.add('flat-active');
        flatsLinks.forEach(link=>{
            if (link== arrayFlatLinks[indexFlat]){
                link.classList.add('floor-link-active');
            }
        })
    })
})