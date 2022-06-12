import { Link, Box } from '@mui/material';
import NextLink from 'Next/link';
import {
    CabecalhoContainer,
    Logo,
    LinksContainer
} from './CabecalhoAdmin.style';


export default function CabecalhoAdmin(){
    return (
        <CabecalhoContainer>
            <div>
                <Logo src={'/imagens/logo.svg'} alt={'Logo Adote um pet'} />
                <LinksContainer>
                <Link component={NextLink} href={'/pets/cadastro'} >
                    <a >Cadastrar Pet</a>
                    </Link>
                <Link component={NextLink} href={'/pets/relatorio'} >
                    <a>Relatorio {' '}
                       <Box component={'span'}
                       sx={{display: {sm: 'initial', xs: 'none'}}}>
                           de adoção
                        </Box> 
                    </a>
                    </Link>
                </LinksContainer>
            </div>

          
        </CabecalhoContainer>

      
    )
}