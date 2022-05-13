import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Logo from '../../assets/logo.png'

export const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px){
        display: flex;
        justify-content: space-evenly;
    }
    
`

export const Divider = styled.div`
    width: 5px;
    height: 80vh;
    background-color: var(--orange);
`

export const Background = styled.div`
    @media (min-width: 1024px){
        flex: 1;
        background: url(${Logo}) no-repeat center var(--black);
        background-size: contain;
        height: 20vh;
        max-width: 500px;
    }

`

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromLeft} 1s;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 40px;
        border-radius: 8px;
        background-color: var(--grey);
        height: 400px;

        .buttonsBox{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 16px;

            button{
                width: 100%;
            }
            
            span{
                margin: 16px 0;
                color: var(--beige);
            }
        }
    }
`