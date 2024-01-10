document.addEventListener('DOMContentLoaded', function () {
  const projectDetails = document.querySelectorAll('.project .details');
  const showDetailsButton = document.querySelectorAll('.project .overlay button');

  showDetailsButton.forEach((button, index) => {
    button.addEventListener('click', () => {
      projectDetails[index].style.display =
        projectDetails[index].style.display === 'none' ? 'block' : 'none';
    });
  });
});
