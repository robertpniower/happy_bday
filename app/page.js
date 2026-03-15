'use client';
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  Zoom,
  Stack
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CakeIcon from '@mui/icons-material/Cake';

export default function BirthdayPage() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      p: 2
    }}>
      <Container maxWidth="sm">
        <Card sx={{ 
          borderRadius: 5, 
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          textAlign: 'center',
          p: 3
        }}>
          <CardContent>
            <CakeIcon sx={{ fontSize: 60, color: '#FE6B8B', mb: 2 }} />
            
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
              Mirna
            </Typography>
            
            <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
              Happy Birthday to the most amazing person! 
            </Typography>

            <Stack spacing={2} direction="column" alignItems="center">
              <Button 
                variant="contained" 
                size="large"
                startIcon={<FavoriteIcon />}
                onClick={() => setShowSecret(!showSecret)}
                sx={{ 
                  borderRadius: 10,
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  px: 4
                }}
              >
                {showSecret ? "Hide Message" : "Open Your Gift"}
              </Button>

              <Zoom in={showSecret}>
                <Box sx={{ mt: 4, display: showSecret ? 'block' : 'none' }}>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#555' }}>
                    I built this server, the pipeline, and this website just to say how much I appreciate you. Have the best day ever!
                  </Typography>
                  <Typography sx={{ mt: 2, fontSize: '2rem' }}>
                    🎈 🎁 🎊
                  </Typography>
                </Box>
              </Zoom>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}