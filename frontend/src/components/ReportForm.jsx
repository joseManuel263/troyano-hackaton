import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Report } from '@mui/icons-material';

export default function ReportForm() {
  const [report, setReport] = useState({
    plate: '',
    type: 'trafico',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reports', {
        unitId: report.plate,
        type: report.type,
      });
      alert('Reporte enviado! 🚨');
      setReport({ plate: '', type: 'trafico' });
    } catch (error) {
      alert('Error al enviar reporte');
    }
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <h2><Report /> Reportar Incidente</h2>
      
      <TextField
        label="Placa del Bus"
        value={report.plate}
        onChange={(e) => setReport({ ...report, plate: e.target.value })}
        fullWidth
        margin="normal"
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo de Reporte</InputLabel>
        <Select
          value={report.type}
          onChange={(e) => setReport({ ...report, type: e.target.value })}
        >
          <MenuItem value="trafico">Tráfico</MenuItem>
          <MenuItem value="accidente">Accidente</MenuItem>
          <MenuItem value="retraso">Retraso</MenuItem>
        </Select>
      </FormControl>

      <Button 
        type="submit" 
        variant="contained" 
        color="error"
        fullWidth
      >
        Enviar Reporte
      </Button>
    </form>
  );
}