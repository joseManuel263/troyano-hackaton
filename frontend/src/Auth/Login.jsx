import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Typography, 
  Container,
  Link,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('Requerido'),
  password: Yup.string().required('Requerido')
});

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', values);
        
        // Guardar token
        if (rememberMe) {
          localStorage.setItem('token', response.data.token);
        } else {
          sessionStorage.setItem('token', response.data.token);
        }
        
        navigate('/');
      } catch (err) {
        setError(err.response?.data?.error || 'Error de autenticación');
      }
    }
  });

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        INICIAR SESIÓN
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Contraseña"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <FormControlLabel
          control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
          label="Recordarme"
          sx={{ mt: 1 }}
        />

        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 3, mb: 2 }}
        >
          Ingresar
        </Button>

        <Typography align="center">
          ¿No tienes cuenta?{' '}
          <Link href="/register" underline="hover">
            Regístrate
          </Link>
        </Typography>
      </form>
    </Container>
  );
}