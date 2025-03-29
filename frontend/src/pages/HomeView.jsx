import React from 'react';
import { 
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Grid,
  Avatar,
  IconButton
} from '@mui/material';
import { DirectionsBus, Add, Place } from '@mui/icons-material';

const HomeView = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: '0 auto' }}>
      {/* Sección de usuario */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>JD</Avatar>
        <div>
          <Typography variant="h6">Juan David</Typography>
          <Typography variant="body2" color="text.secondary">
            50000007557
          </Typography>
        </div>
      </Box>

      {/* Campo de búsqueda */}
      <TextField
        fullWidth
        placeholder="¿A dónde quieres ir?"
        InputProps={{
          startAdornment: <Place sx={{ color: 'action.active', mr: 1 }} />
        }}
        sx={{ mb: 4 }}
      />

      {/* Sección de transporte */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Accede a tu transporte
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <DirectionsBus sx={{ fontSize: 40, color: 'primary.main' }} />
            </Grid>
            <Grid item xs>
              <Typography variant="body1">Bus</Typography>
              <Typography variant="body2" color="text.secondary">
                Sala disponible
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                $70.00 MXN
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" size="small">
                Seleccionar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Sección de rutas favoritas */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Rutas favoritas
      </Typography>

      <Card>
        <CardContent>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            py: 4,
            border: '2px dashed',
            borderColor: 'divider',
            borderRadius: 1
          }}>
            <IconButton sx={{ mb: 1 }}>
              <Add fontSize="large" />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              No has agregado alguna ruta
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomeView;