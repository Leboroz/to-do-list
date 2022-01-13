export default (msg) => {
  const errorWindow = document.createElement('div');
  errorWindow.className = 'error-window';
  errorWindow.innerHTML = `
  <p class="error-description">${msg}</p>
  <button id="error-btn" class="btn-alert" type="submit">Ok</button>
  `;
  document.appendChild(errorWindow);

  errorWindow.querySelector('button').onclick = (e) => {
    e.target.parentElement.remove();
  };
};
