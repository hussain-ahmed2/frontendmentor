const shareBtn = document.querySelector('.share-btn');
const shareItem = document.querySelector('.share');
const mobileShareBtn = document.querySelector('.mobile-share-btn');

const handleClick = () => {
  if(shareItem.style.visibility === 'visible'){
    shareItem.style.visibility = 'hidden';
  }else {
    shareItem.style.visibility = 'visible';
  }
}

shareBtn.addEventListener('click', handleClick);

const avaterInfo = document.querySelectorAll('.avater-info')[1];
avaterInfo.style.display = 'flex';

const mobileShare = document.querySelector('.mshare');

mobileShareBtn.addEventListener('click', () => {
  if(avaterInfo.style.display === 'flex'){
    avaterInfo.style.display = 'none';
    mobileShare.style.display = 'flex';
    mobileShareBtn.style.backgroundColor = 'hsl(217, 19%, 35%)';
  }else {
    mobileShare.style.display = 'none';
    avaterInfo.style.display = 'flex';
    mobileShareBtn.style.backgroundColor = 'unset';
  }
})
