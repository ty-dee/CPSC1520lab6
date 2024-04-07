/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

async function getContacts() {
  const res = await fetch('public/data/contacts.json')
	const contactList = await res.json()
	renderContacts(contactList, document.getElementById('contacts'))
}

function renderContacts(contacts) {
  const contactsContainer = document.getElementById('contacts');
  contactsContainer.innerHTML = ''; 
  
  contacts.forEach(contact => {
      const contactTemplate = `
      <div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${contact.name}</h5>
      </div>
    <small>${contact.email}</small>
    </div>
      `;
      contactsContainer.innerHTML += contactTemplate;
  });
}

getContacts();