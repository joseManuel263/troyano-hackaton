import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Typography, 
  Container,
  Link,
  CircularProgress
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  nombre: Yup.string()
    .required('Requerido')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo letras permitidas'),
  apellidoPaterno: Yup.string()
    .required('Requerido')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo letras permitidas'),
  email: Yup.string()
    .email('Email inválido')
    .required('Requerido'),
  password: Yup.string()
    .min(8, 'Mínimo 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, 'Debe contener mayúscula, minúscula y número')
    .required('Requerido')
});

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/auth/register', values);
      navigate('/login', { state: { registrationSuccess: true } });
    } catch (err) {
      setError(err.response?.data?.error || 'Error en el servidor');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <Container maxWidth="xs" sx={{ py: 4, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Crear Cuenta
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          fullWidth
          margin="normal"
          label="Nombre(s)"
          name="nombre"
          autoComplete="given-name"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}
          disabled={isSubmitting}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Apellido Paterno"
          name="apellidoPaterno"
          autoComplete="family-name"
          value={formik.values.apellidoPaterno}
          onChange={formik.handleChange}
          error={formik.touched.apellidoPaterno && Boolean(formik.errors.apellidoPaterno)}
          helperText={formik.touched.apellidoPaterno && formik.errors.apellidoPaterno}
          disabled={isSubmitting}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Apellido Materno"
          name="apellidoMaterno"
          autoComplete="additional-name"
          value={formik.values.apellidoMaterno}
          onChange={formik.handleChange}
          disabled={isSubmitting}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Correo electrónico"
          name="email"
          type="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          disabled={isSubmitting}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Contraseña"
          name="password"
          type="password"
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          disabled={isSubmitting}
        />

        {error && (
          <Typography color="error" sx={{ mt: 1, textAlign: 'center' }}>
            ⚠️ {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          sx={{ mt: 3, mb: 2, py: 1.5 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Registrarse'
          )}
        </Button>

        <Typography align="center" sx={{ color: 'text.secondary' }}>
          ¿Ya tienes cuenta?{' '}
          <Link
  component="button" // Añade esto
  onClick={() => navigate('/login')} // Usa navigate
  underline="hover"
  sx={{ fontWeight: 'medium', color: 'primary.main' }}
>
  Iniciar Sesión
</Link>
        </Typography>
      </form>
    </Container>
  );
}