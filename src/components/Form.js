import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState({});


  const [backgroundColorF, setBackgroundColorF] = useState(''); 
  const [backgroundColorS, setBackgroundColorS] = useState(''); 
  const [backgroundColorC, setBackgroundColorC] = useState(''); 
  const [backgroundColorE, setBackgroundColorE] = useState(''); 
  const [backgroundColorN, setBackgroundColorN] = useState(''); 

  const handleBlurF = () => {
    if (!nameRegex.test(firstName)) {
      setBackgroundColorF('red'); 
    } else {
      setBackgroundColorF('green'); 
    }
  };
  const handleBlurS = () => {
    if (!nameRegex.test(lastName)) {
      setBackgroundColorS('red'); 
    } else {
      setBackgroundColorS('green'); 
    }
  };
  const handleBlurC = () => {
    if (!nameRegex.test(country)) {
      setBackgroundColorC('red'); 
    } else {
      setBackgroundColorC('green'); 
    }
  };
  const handleBlurE = () => {
    if (!emailRegex.test(email)) {
      setBackgroundColorE('red'); 
    } else {
      setBackgroundColorE('green'); 
    }
  };
  const handleBlurN = () => {
    if (!quantityRegex.test(quantity)) {
      setBackgroundColorN('red'); 
    } else {
      setBackgroundColorN('green'); 
    }
  };

  const newErrors = {};
  const nameRegex = /^[A-Za-zА-Яа-яЁё]+$/; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const quantityRegex = /^[1-9]\d*$/; 

  const validate = () => {
  
    if (!nameRegex.test(firstName)) {
      newErrors.firstName = 'Имя должно содержать только буквы.';
    }

    if (!nameRegex.test(lastName)) {
      newErrors.lastName = 'Фамилия должна содержать только буквы.';
    }

    if (!nameRegex.test(country)) {
      newErrors.country = 'Страна должна содержать только буквы.';
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Введите корректный email.';
    }

    if (!quantityRegex.test(quantity)) {
      newErrors.quantity = 'Количество должно быть положительным числом.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const [isActive, setIsActive] = useState(false); 
  
      const handleClick = () => {
          setIsActive(true); 
          setTimeout(() => {
          setIsActive(false); 
          }, 300);
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const formData = {
        firstName,
        lastName,
        country,
        email,
        quantity,
      };
      alert(JSON.stringify(formData, null, 2)); 
    } else {
      alert(Object.values(errors).join('\n'));
    }
  };

  const getInputClass = (field) => {
    return errors[field] ? 'input-error' : ''; 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_time">
        <input
          placeholder='Имя'
          type="text"
          value={firstName}
          onBlur={handleBlurF}
          style={{ backgroundColor: backgroundColorF }}
          onChange={(e) => setFirstName(e.target.value)}
          className={'firstName input-error'}
          required
        />
      </div>
      <div className="form_time">
        <input
          type="text"
          placeholder='Фамилия'
          value={lastName}
          onBlur={handleBlurS}
          style={{ backgroundColor: backgroundColorS }}
          onChange={(e) => setLastName(e.target.value)}
          className={getInputClass('lastName')}
 
          required
        />
      </div>
      <div className="form_time">
        <input
          type="text"
          placeholder='Страна'
          value={country}
          onBlur={handleBlurC}
          style={{ backgroundColor: backgroundColorC }}
          onChange={(e) => setCountry(e.target.value)}
          className={getInputClass('country')}
          required
        />
      </div>
      <div className="form_time">
        <input
          type="email"
          placeholder='Email'
          value={email}
          onBlur={handleBlurE}
          style={{ backgroundColor: backgroundColorE }}
          onChange={(e) => setEmail(e.target.value)}
          className={getInputClass('email')}
          required
        />
      </div>
      <div className="form_time">
        <input
          type="number"
          placeholder='Количество'
          value={quantity}
          onBlur={handleBlurN}
          style={{ backgroundColor: backgroundColorN }}
          onChange={(e) => setQuantity(e.target.value)}
          className={getInputClass('quantity')}
          required
        />
      </div>
      <div className="form_time">
        <button type="submit" className={`animated-button ${isActive ? 'active' : ''}`} onClick={handleClick}>Отправить</button>
      </div>
    </form>
  );
};

export default Form;
