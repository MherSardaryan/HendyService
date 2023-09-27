import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // handle successful response here
        } else {
          // handle error response here
        }
      })
      .catch((error) => {
        // handle fetch error here
      });
  };

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label> <br />
      <label>
        Surname:
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
      </label> <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label> <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label> <br />
      <button type="submit">Submit</button>
    </form>
  );
}
