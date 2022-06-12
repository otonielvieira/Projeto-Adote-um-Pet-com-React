import { NextPage } from "next";
import { useCadastro } from "../../data/hooks/pets/useCadastro";
import Titulo from "../../ui/components/Titulo/Titulo";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";

const Cadastro: NextPage = () =>{
    const{
        nome,
        historia,
        foto,
        setNome,
        setHistoria,
        setFoto,
        cadastrar,
        mensagem,
        setMensagem
    } = useCadastro();
    return (
        <>
         <Titulo 
            titulo={'Cadastro de pets para adoção'}
            subtitulo={'Preencha os dados do novo Pet.'}
        />

        <Paper sx={{maxWidth: 970, mx: 'auto', p:4}}>
          <Grid container spacing={3}>

            <Grid item xs={12}>
                <TextField 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    label={'Nome'}
                    placeholder={'Digite o nome do Pet'}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12}>
                <TextField 
                    value={historia}
                    onChange={(e) => setHistoria(e.target.value)}
                    label={'História do Pet'}
                    placeholder={'Digite o nome do Pet'}
                    multiline
                    rows={3}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12}>
                <TextField 
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                    label={'Foto'}
                    placeholder={'Digite o endereço da imagem'}
                    fullWidth
                />

            <Button
                variant={'contained'}
                color={'secondary'}
                sx={{mt:2}}
                component={'a'}
                href={'https://imgur.com/upload'}
                target={'_blank'}
            >
                Enviar imagem
            </Button>

            </Grid>

            <Grid item xs={12} sx={{textAlign:'center'}}>
                <Button
                    onClick={cadastrar}
                    variant={'contained'}
                    fullWidth
                    sx={{maxWidth:{md:200}}}
                >
                    Cadastrar Pet
                </Button>
            </Grid>      
         </Grid>
        </Paper>

        <Snackbar 
            open={mensagem.length > 0}
            autoHideDuration={2500}
            onClose={() => setMensagem('')}
            message={mensagem}
        />       
        </>
    )
}

export default Cadastro;
