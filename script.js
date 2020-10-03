document.getElementById('id-share-button').addEventListener('click', share, false);

function share() {
 document.getElementById('id-card-footer').style.display = 'none';
 document.getElementById('id-card-share').style.display = 'flex';
}
