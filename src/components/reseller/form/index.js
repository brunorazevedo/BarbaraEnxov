import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import {
    StyledFormContainer,
    StyledFormWrapper,
    StyledForm,
    StyledInput,
    StyledTextarea,
    StyledButton,
    StyledLabel,
    StyledFormRow,
    StyledImageContainer,
    StyledTextOverlay,
    StyledPopup
} from './styles';



export function FormContact({data}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [cpfOrCnpj, setCpfOrCnpj] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            phone: phone,
            email: email,
            companyName: companyName,
            cpfOrCnpj: cpfOrCnpj,
            city: city,
            message: message
        };

        emailjs.send('service_w1lipsf', 'template_ryhsde5', templateParams, 'TpvFkv5JxwBvaLt3L')
        .then((response) => {
            setName('');
            setPhone('');
            setEmail('');
            setCompanyName('');
            setCpfOrCnpj('');
            setCity('');
            setMessage('');
            setPopupVisible(true);
            setTimeout(() => {
                setPopupVisible(false);
            }, 4000); // 3 seconds
        }, (err) => {
            console.log("erro: ", err);
        });
    }

    return (
        <StyledFormContainer>
            <StyledFormWrapper>
                <StyledImageContainer>
                    <Image
                        src={data.data.imagem_formulario.url}
                        alt={data.data.imagem_formulario.alt}
                        layout="responsive"
                        width={600}
                        height={700}
                        objectFit="cover"
                        style={{ borderRadius: '8px' }}
                    />
                    <StyledTextOverlay>
                        <h1>{data.data.titulo_imagem_formulario}</h1>
                        <p>{data.data.subtitulo_imagem_formulario}</p>
                    </StyledTextOverlay>
                </StyledImageContainer>
                <StyledForm onSubmit={sendEmail}>
                    <StyledFormRow>
                        <div>
                            <StyledLabel htmlFor="name">Nome</StyledLabel>
                            <StyledInput
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome"
                                required
                            />
                        </div>
                        <div>
                            <StyledLabel htmlFor="phone">Telefone (com DDD)</StyledLabel>
                            <StyledInput
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Digite seu telefone com DDD"
                                required
                            />
                        </div>
                    </StyledFormRow>
                    <div>
                        <StyledLabel htmlFor="email">Email</StyledLabel>
                        <StyledInput
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>
                    <StyledFormRow>
                        <div>
                            <StyledLabel htmlFor="companyName">Razão Social</StyledLabel>
                            <StyledInput
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="Digite a Razão Social"
                            />
                        </div>
                        <div>
                            <StyledLabel htmlFor="cpfOrCnpj">CPF ou CNPJ</StyledLabel>
                            <StyledInput
                                type="text"
                                id="cpfOrCnpj"
                                name="cpfOrCnpj"
                                value={cpfOrCnpj}
                                onChange={(e) => setCpfOrCnpj(e.target.value)}
                                placeholder="Digite CPF ou CNPJ"
                            />
                        </div>
                    </StyledFormRow>
                    <div>
                        <StyledLabel htmlFor="city">Cidade</StyledLabel>
                        <StyledInput
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Digite sua cidade"
                            required
                        />
                    </div>
                    <div>
                        <StyledLabel htmlFor="message">Deixe sua mensagem</StyledLabel>
                        <StyledTextarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <StyledButton type="submit">Enviar informações</StyledButton>
                    <p>Após o envio do formulário, entraremos em contato em até 48h.</p>
                </StyledForm>
            </StyledFormWrapper>
            {popupVisible && (
                <StyledPopup>Email enviado com sucesso! Em breve entraremos em contato.</StyledPopup>
            )}
        </StyledFormContainer>
    );
}
