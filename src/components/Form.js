import { useState, useRef } from 'react';
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import './Form.css';


function Form() {
    const [indexInvalidValueOnInput, setIndexInvalidValueOnInput] = useState(null);
    const counterValidInputs = useRef(0);
    const goToPageUser = useNavigate();

    // torna informações dos elementos acessiveis
    const getValueIntoInputName = useRef(null);
    const getValueIntoInputEmail = useRef(null);
    const getValueIntoInputPhoneNumber = useRef(null);
    const getValueIntoInputDateOfBirth = useRef(null);
    const getValueIntoInputPostalCode = useRef(null);
    const getValueIntoInputTypeOfHausing = useRef(null);
    const getValueIntoInputNumberOfHausing = useRef(null);
    const getValueIntoInputNeighborhood = useRef(null);
    const getValueIntoInputCity = useRef(null);

    const userInformationsFormatedToArray = [
        getValueIntoInputName,
        getValueIntoInputEmail,
        getValueIntoInputPhoneNumber,
        getValueIntoInputDateOfBirth,
        getValueIntoInputPostalCode,
        getValueIntoInputTypeOfHausing,
        getValueIntoInputNumberOfHausing,
        getValueIntoInputNeighborhood,
        getValueIntoInputCity,
    ];

    function getAndSaveAllInformationsInForm() {
        // verfifica se todos os inputs estão preechidos, caso todos estejam
        // salva um objeto no Local Storage

        let counterWhiteSpaceOnInputPhoneNumber = 0;
        for(let counter = 0; counter < 15; counter++) {
            if (getValueIntoInputPhoneNumber.current.value[counter] === ' ') {
                counterWhiteSpaceOnInputPhoneNumber = counterWhiteSpaceOnInputPhoneNumber + 1; 
            }
        }

        // começa em 1 porque 0 é a quantidade de espaços vazios necessários para submeter form 
        let setIfInputPostalCodeIsTotalyCompleted = getValueIntoInputPostalCode.current.value.includes(" ");

        // reset contador de inputs validos a cada tentativa de submit
        counterValidInputs.current = 0;
        removeErrorBorderOnGeneralInput()

        for(let index = 0; index < userInformationsFormatedToArray.length; index++) {
            if(userInformationsFormatedToArray[index].current.value === '') {
                // verifica se input esta vazio e aplica borda vermelha caso seja true
                userInformationsFormatedToArray[index].current.className += 'border-red-invalid-input';
                setIndexInvalidValueOnInput(index);
                return
            }
            
            if(getValueIntoInputPhoneNumber.current.value !== '' && index !== 2 && counterWhiteSpaceOnInputPhoneNumber !== 2) {
                // verifica se input numero de telefone esta faltando caracterie, caso true aplica borda vermelha
                getValueIntoInputPhoneNumber.current.className = '';
                getValueIntoInputPhoneNumber.current.className += 'border-red-invalid-input';

                counterValidInputs.current = counterValidInputs.current - 1;
                return
            }

            if(getValueIntoInputPostalCode.current.value !== '' && index !== 4 && setIfInputPostalCodeIsTotalyCompleted === true) {
                // verifica se input cep esta faltando caracterie, caso true aplica borda vermelha
                getValueIntoInputPostalCode.current.className = '';
                getValueIntoInputPostalCode.current.className += 'border-red-invalid-input';
                
                counterValidInputs.current = counterValidInputs.current - 1;
                return
            }

            if(userInformationsFormatedToArray[counterValidInputs.current].current.value !== '' ) {
                //aumenta +1 no counterValidInput cada input correto.
                counterValidInputs.current = counterValidInputs.current + 1;
            }


            // quando maior que 8 permite o submit do formulário
            if(counterValidInputs.current === 9 && setIfInputPostalCodeIsTotalyCompleted === false && counterWhiteSpaceOnInputPhoneNumber === 2) {
                saveDataOfFormInLocalStorage()
                goToPageUser('/home');
            }
        }

        function saveDataOfFormInLocalStorage() {
            const formatDataOfFormToObj = {
                name: getValueIntoInputName.current.value,
                email: getValueIntoInputEmail.current.value,
                phone_number: getValueIntoInputPhoneNumber.current.value,
                date_of_birth: getValueIntoInputDateOfBirth.current.value,
                postal_code: getValueIntoInputPostalCode.current.value,
                type_of_hausing: getValueIntoInputTypeOfHausing.current.value,
                number_of_hausing: getValueIntoInputNumberOfHausing.current.value,
                Neighborhood: getValueIntoInputNeighborhood.current.value,
                city: getValueIntoInputCity.current.value,
            }

            localStorage.clear();
            localStorage.setItem('dataOfUser', JSON.stringify(formatDataOfFormToObj));
        }
    }

    function removeErrorBorderOnGeneralInput() {
        // retira class que deixa borda vermelha atraves do index do elemento
        if(indexInvalidValueOnInput !== null) {
            userInformationsFormatedToArray[indexInvalidValueOnInput].current.className = ('');
            setIndexInvalidValueOnInput(null);
        }
    }

    function removeErrorBorderOnInputPhoneNumber() {
        userInformationsFormatedToArray[2].current.className = ('');
    }

    function removeErrorBorderOnInputPostalCode() {
        userInformationsFormatedToArray[4].current.className = ('');
    }

    return (
        <form className="form-user-info" autoComplete="off">
            <h2 className="title-form">Cadastro</h2>
           
            <div className="agroup-label-and-input container-input-user-name" onClick={removeErrorBorderOnGeneralInput}>
                <label htmlFor="user-name">Nome Completo</label>
                <input id="user-name" type="text" placeholder="Nome Completo" minLength="3" maxLength="40" ref={getValueIntoInputName} required></input>
            </div>

            <div className="agroup-label-and-input container-user-email" onClick={removeErrorBorderOnGeneralInput}>
                <label htmlFor="user-email">Email</label>
                <input id="user-email" type="email" placeholder="Email" maxLength="40" ref={getValueIntoInputEmail} required></input>
            </div>

            <div className="agroup-label-and-input container-user-phone-number" onClick={removeErrorBorderOnInputPhoneNumber}>
                <label htmlFor="user-phone-number">Telefone</label>
                <PatternFormat
                    id="user-phone-number"
                    valueIsNumericString
                    getInputRef={getValueIntoInputPhoneNumber}
                    placeholder="Telefone"
                    format="(##)  #####-####"
                    required
                />

            </div>

            <div className="agroup-label-and-input container-user-date-of-birth" onClick={removeErrorBorderOnGeneralInput}>
                <label htmlFor="user-date-of-birth">Nascimento</label>
                <input id="user-date-of-birth" type="date" placeholder="Nascimento" ref={getValueIntoInputDateOfBirth} required></input>
            </div>

            <h3 className="title-address">Endereço</h3>

            <div className="agroup-label-and-input container-user-postal-code" onClick={removeErrorBorderOnInputPostalCode}>
                <label htmlFor="user-postal-code">Cep</label>
                <PatternFormat
                    valueIsNumericString
                    getInputRef={getValueIntoInputPostalCode}
                    placeholder="Cep"
                    format="####-####"
                    required
                />
            </div>

            <div className="agroup-label-and-input container-user-type-of-hausing" onClick={removeErrorBorderOnGeneralInput}>
                <label htmlFor="user-type-of-hausing">Lograduro</label>
                <input
                    id="user-type-of-hausing"
                    type="text"
                    maxLength="20"
                    placeholder="Lograduro"
                    ref={getValueIntoInputTypeOfHausing}
                    required
                ></input>
            </div>

            <div className="agroup-label-and-input container-user-number-of-hausing" onClick={removeErrorBorderOnGeneralInput}>
                <label htmlFor="user-number-of-hausing">Nºda residência</label>
                <input
                    id="user-number-of-hausing"
                    type="tel"
                    maxLength="5"
                    placeholder="Nºda residência"
                    ref={getValueIntoInputNumberOfHausing}
                    required
                ></input>
            </div>

            <div className="agroup-label-and-input container-user-neighborhood" onClick={removeErrorBorderOnGeneralInput}>
                <label htmlFor="user-neighborhood">Bairro</label>
                <input
                    id="user-neighborhood"
                    type="text"
                    maxLength="35"
                    placeholder="Bairro"
                    ref={getValueIntoInputNeighborhood}
                    required
                ></input>
            </div>

            <div className="agroup-label-and-input container-user-city" onClick={removeErrorBorderOnGeneralInput}>
                <label htmlFor="user-city">Cidade</label>
                <input id="user-city" type="text" placeholder="Cidade" maxLength="40" ref={getValueIntoInputCity} required></input>
            </div>

            <button className="button-submit-form" type="button" onClick={getAndSaveAllInformationsInForm}>Concluir</button>
        </form>
    );    
}

export default Form;