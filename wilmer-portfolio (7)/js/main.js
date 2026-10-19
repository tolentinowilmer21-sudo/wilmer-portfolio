(function(){var b=document.querySelector('.menu'),l=document.querySelector('nav ul');
if(b&&l){b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()})})();
