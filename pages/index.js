import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useReducer } from 'react';
import { useRouter, userRouter } from 'next/router';
import appConfig from '../config.json'

// Componente de título
function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        // Valor dinamico do JS
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag}  {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

// Componente React
// function HomePage() {
//     // JSX - JavaScript XML
//     return (
//         <div>
//             <GlobalStyle/>
//             <Title tag="h2">W3lc0me 4ga1n!</Title>
//             <h2>Discord - Fsociety</h2>
//             <h3>Our democracy has been hacked</h3>
//         </div>
//     )
// }

// export default HomePage

export default function PaginaInicial() {
    // const username = 'dionardomarques';
    const [username, setUsername] = React.useState('dionardomarques');
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals['300'],
                    backgroundImage: 'url(https://i.ibb.co/hZCcLr2/746199.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals['700'],
                        border: '3px solid',
                        borderColor: appConfig.theme.colors.primary['200'],
                        opacity: '0.9'
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            // console.log('Alguém submeteu o form')
                            roteamento.push('/chat')
                            // window.location.href = '/chat';
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                            borderColor: appConfig.theme.colors.primary['050'],

                        }}
                    >
                        <Title tag="h2">W3lc0me 4ga1n!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '3px', color: appConfig.theme.colors.primary['050'] }}>
                            {appConfig.name}
                        </Text>
                        <Text variant="body3" styleSheet={{  marginBottom: '10px', color: appConfig.theme.colors.neutrals['200'] }}>Our democracy has been hacked</Text>

                        {/* <input 
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                const valor = event.target.value
                                // Trocar o valor da variável
                                setUsername(valor);
                            }}
                        /> */}
                        <TextField
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                const valor = event.target.value
                                // Trocar o valor da variável
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals['000'],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary['100'],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary['100'],
                                mainColorLight: appConfig.theme.colors.primary['200'],
                                mainColorStrong: appConfig.theme.colors.primary['200'],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals['000'],
                                backgroundColor: appConfig.theme.colors.primary['100'],
                                padding: '3px 10px',
                                borderRadius: '1000px',
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}