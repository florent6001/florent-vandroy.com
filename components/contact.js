import axios from 'axios';
import {useState} from 'react'

export default function Contact() {
    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let button = document.getElementById('submit-btn')
        button.innerHTML = 'Envoi en cours...'
        button.disabled = true
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios
            .post(
                "https://getform.io/f/ca842a0d-f870-467b-8044-5280e396239f",
                formData,
                {headers: {"Content-Type": "application/x-www-form-urlencoded"}}
            )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    name: "",
                    email: "",
                    message: ""
                });
                console.log(response);
                button.innerHTML = 'Envoyer mon message'
                button.disabled = false
            })
            .catch(function (error) {
                console.log(error);
                button.innerHTML = 'Envoyer mon message'
                button.disabled = false
            });
    }

    return (
        <form
            acceptCharset="UTF-8"
            method="POST"
            id="ajaxForm"
            onSubmit={handleSubmit}
            className="pt-5"
        >
            <label htmlFor="name">Votre prénom / nom</label>
            <input
                type="text"
                className="border border-gray-800 w-full rounded p-2 mb-5 mt-2 text-black"
                id="name"
                required
                name="name"
                value={query.name}
                onChange={handleChange()}
            />
            <label htmlFor="email">Votre adresse email</label>
            <input
                type="email"
                className="border border-gray-800 w-full rounded p-2 mb-5 mt-2 text-black"
                id="email"
                required
                name="email"
                value={query.email}
                onChange={handleChange()}
            />
            <label htmlFor="message">Votre message</label>
            <textarea
                type="message"
                className="border border-gray-800 w-full rounded p-2 mb-5 mt-2 text-black"
                id="message"
                required
                name="message"
                value={query.message}
                onChange={handleChange()}
                rows="5"></textarea>

            {formStatus ? (
                <div className="text-success mb-2">
                    Votre message a été envoyé avec succès.
                </div>
            ) : (
                <button type="submit" className="btn btn-primary" id='submit-btn'>Envoyer mon message</button>
            )}
        </form>
    );
}