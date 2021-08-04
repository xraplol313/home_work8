document.head.innerHTML = '';
document.body.innerHTML = '';


let title = document.createElement('title');
title.innerHTML = 'Home worc 7';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let fonts = document.createElement('link');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap');
fonts.setAttribute('rel', 'stylesheet');
document.head.appendChild(fonts)




let styleBody = document.querySelector('body');
styleBody.style.fontFamily = `'Arvo', serif `;



let titleWrapper = document.createElement('div');
titleWrapper.classList.add('title__wrapper');
titleWrapper.style.textAlign = 'center';
titleWrapper.style.paddingTop = '60px';
document.body.appendChild(titleWrapper);


let wrapperH1 = document.createElement('h1');
wrapperH1.classList.add('title');
wrapperH1.innerHTML = 'Choose Your Option';
wrapperH1.style.fontSize = '36px';
wrapperH1.style.lineHeight = '48px';
wrapperH1.style.color = '#212121';
titleWrapper.appendChild(wrapperH1);


let wrapperP = document.createElement('p');
wrapperP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
wrapperP.classList.add('title__text');
wrapperP.style.fontSize = '14px';
wrapperP.style.lineHeight = '26px';
wrapperP.style.color = '#9fa3a7';
titleWrapper.appendChild(wrapperP);


let items = document.createElement('div');
items.classList.add('items');
items.style.display = 'flex';
items.style.justifyContent = 'center';
items.style.paddingTop = '40px';
document.body.appendChild(items);

let item = document.createElement('di1v');
item.classList.add('item')
item.style.textAlign = 'center';
item.style.padding = '30px';
item.style.maxWidth = '400px';
item.style.border = '1px solid #E8E9ED';
item.style.borderRadius = '7px 7px 0 0 ';
items.appendChild(item);

let whereToWork = document.createElement('p');
whereToWork.classList.add('worc');
whereToWork.innerHTML = 'FREELANCER';
whereToWork.style.paddingTop = '80px';
whereToWork.style.color = '#9FA3A7';
whereToWork.style.fontSize = '12px';
whereToWork.style.lineHeight = '15px';
whereToWork.style.letterSpacing = '2.4px';
item.appendChild(whereToWork);


let itemTitle = document.createElement('h3');
itemTitle.classList.add('title');
itemTitle.innerHTML = 'Initially designed to';
itemTitle.style.fontSize = '36px';
itemTitle.style.lineHeight = '48px';
itemTitle.style.maxWidth = '324px';
itemTitle.style.margin = '0 auto';
itemTitle.style.paddingTop = '19px';
item.appendChild(itemTitle);

let itemDescr = document.createElement('p');
itemDescr.classList.add('descr');
itemDescr.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
itemDescr.style.paddingTop = '25px';
itemDescr.style.fontSize = '12px';
itemDescr.style.lineHeight = '22px';
itemDescr.style.color = '#9FA3A7';
itemDescr.style.maxWidth = '247px';
itemDescr.style.margin = '0 auto';
item.appendChild(itemDescr);

let itemBtn = document.createElement('button');
itemBtn.classList.add('button');
itemBtn.innerHTML = 'START HERE';
itemBtn.style.margin = ' 50px 0 71px 0';
itemBtn.style.color = '#212121';
itemBtn.style.fontSize = '12px';
itemBtn.style.lineHeight = '15px';
itemBtn.style.letterSpacing = '2.4px';
itemBtn.style.fontWeight = '800';
itemBtn.style.padding = '18px';
itemBtn.style.borderRadius = '50px';
itemBtn.style.border = '3px solid #FFC80A';
itemBtn.style.background = '#ffffff';
item.appendChild(itemBtn);



let itemClone = item.cloneNode();
itemClone.style.backgroundColor = ' #8F75BE'
items.appendChild(itemClone);

let whereToWork1 = document.createElement('p');
whereToWork1.classList.add('worc');
whereToWork1.innerHTML = 'STUDIO';
whereToWork1.style.paddingTop = '80px';
whereToWork1.style.color = '#FFC80A';
whereToWork1.style.fontSize = '12px';
whereToWork1.style.lineHeight = '15px';
whereToWork1.style.letterSpacing = '2.4px';
itemClone.appendChild(whereToWork1);


let itemTitle1 = document.createElement('h3');
itemTitle1.classList.add('title');
itemTitle1.innerHTML = 'Initially designed to';
itemTitle1.style.fontSize = '36px';
itemTitle1.style.lineHeight = '48px';
itemTitle1.style.maxWidth = '324px';
itemTitle1.style.margin = '0 auto';
itemTitle1.style.paddingTop = '19px';
itemTitle1.style.color = '#ffffff';
itemClone.appendChild(itemTitle1);

let itemDescr1 = document.createElement('p');
itemDescr1.classList.add('descr');
itemDescr1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
itemDescr1.style.paddingTop = '25px';
itemDescr1.style.fontSize = '12px';
itemDescr1.style.lineHeight = '22px';
itemDescr1.style.color = '#ffffff';
itemDescr1.style.maxWidth = '247px';
itemDescr1.style.margin = '0 auto';
itemClone.appendChild(itemDescr1);

let itemBtn1 = document.createElement('button');
itemBtn1.classList.add('button');
itemBtn1.innerHTML = 'START HERE';
itemBtn1.style.margin = ' 50px 0 71px 0';
itemBtn1.style.color = '#ffffff';
itemBtn1.style.fontSize = '12px';
itemBtn1.style.lineHeight = '15px';
itemBtn1.style.fontWeight = '800';
itemBtn1.style.letterSpacing = '2.4px';
itemBtn1.style.backgroundColor = '#8F75BE';
itemBtn1.style.padding = '18px';
itemBtn1.style.borderRadius = '50px';
itemBtn1.style.border = '3px solid #FFC80A';
itemClone.appendChild(itemBtn1);


