window.onload = () => {
  let wrapper = document.getElementById('wrapper');
  let image = document.getElementById('image');
  let bgColors = ['#fff', '#37B29A', '#7372A7'];
  let logos = ['images/logo_c.png', 'images/logo_w.png', 'images/logo_w.png'];
  let helper = 0;
  let position = 0;
  let timmer = 0;
  let interval = setInterval(() => {
    helper++
    position = helper % 3;
    wrapper.style.backgroundColor = bgColors[position];
    image.src = logos[position];
  }, 2500)
}