document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const contact = {
      name: document.getElementById('name').value,
      nickname: document.getElementById('nickname').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value
  };

  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));

  console.log("Contact added:", contact); 
  console.log("All contacts:", contacts); 

  document.getElementById('contactForm').reset();
  loadContacts();
});

function loadContacts() {
  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  let contactTable = document.getElementById('contactTable');

  contactTable.innerHTML = '';

  contacts.forEach((contact, index) => {
      let row = contactTable.insertRow();
      row.insertCell(0).textContent = index + 1;
      row.insertCell(1).textContent = contact.name;
      row.insertCell(2).textContent = contact.nickname;
      row.insertCell(3).textContent = contact.phoneNumber;
      row.insertCell(4).textContent = contact.email;
      row.insertCell(5).textContent = contact.address;
  });

  console.log("Table loaded with contacts"); 
}

function deleteContact() {
  let contactIndex = prompt("Enter the contact number to delete:");
  if (contactIndex !== null && !isNaN(contactIndex)) {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      if (contactIndex > 0 && contactIndex <= contacts.length) {
          contacts.splice(contactIndex - 1, 1);
          localStorage.setItem('contacts', JSON.stringify(contacts));
          loadContacts();
      } else {
          alert("Invalid contact number!");
      }
  }
}

if (document.getElementById('contactTable')) {
  loadContacts();
}
