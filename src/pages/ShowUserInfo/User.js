import './User.css';

function User() {
    const getUserData = localStorage.getItem('dataOfUser');
    const convertUserDataToObj = JSON.parse(getUserData)

    function errorMessageInvalidDataInForm() {
        // essa função é chamada caso o usuário acesse a pagína sem preencher
        // o formulário corretamente ou em caso de seus dados não terem sidos salvos.
        return (
            <div className="container-error-message-with-user-data">
                <h1>Ops... Parece que algo deu errado ao mostrar seus dados</h1>
                <br></br>
                <h2>Volte a pagína anterior e preencha o formulário novamente.</h2>
            </div>
        )
    }

    function showUserData() {
      return (
        <div className="contianer-user-data">
            <div className="agroup-contact-informations">
                <h2>Usúario</h2>
    
                <h3 className="text-user-name">{convertUserDataToObj.name}</h3>
                <h3 className="text-date-of-birth">
                    {
                    `
                    ${convertUserDataToObj.date_of_birth[8]}${convertUserDataToObj.date_of_birth[9]}/${convertUserDataToObj.date_of_birth[5]}${convertUserDataToObj.date_of_birth[6]}/${convertUserDataToObj.date_of_birth.substring(0, 4)}
                    `
                    }
                </h3>
                <br></br>
                <h3 className="text-email">{convertUserDataToObj.email}</h3>
                <h3 className="text-phone-number">
                    {`(${convertUserDataToObj.phone_number[0]}${convertUserDataToObj.phone_number[1]})  ${convertUserDataToObj.phone_number.substring(2)}`}
                </h3>
            </div>

            <div className="agroup-address-informations">
                <h3>Informações de endereço</h3>

                <h4>Logradouro:
                    <span>{convertUserDataToObj.type_of_hausing}</span>
                </h4>

                <h4>Nºda residência:
                    <span>{convertUserDataToObj.number_of_hausing}</span>
                </h4>

                <h4>Bairro:
                    <span>{convertUserDataToObj.Neighborhood}</span>
                </h4>

                <h4>Cidade:
                    <span>{convertUserDataToObj.city}</span>
                </h4>

            </div>
        </div>
      );
    }

    return(
        <div className="main-container-page-user">
            {
                getUserData === null
                ? errorMessageInvalidDataInForm()
                : showUserData()
            }
        </div>
    )
}

export default User;