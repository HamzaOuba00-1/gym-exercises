import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' }}}>
            <Typography variant="h3"  fontWeight={700} mb={5}>Exercises that target the <span style={{ color: "#fc5757", textTransform: "capitalize" }}>same muscle group</span></Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }} mb={10}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography variant="h3"  fontWeight={700} mb={5}>Exercises that use the <span style={{ color: "#fc5757", textTransform: "capitalize" }}>same equipment</span></Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    );
}

export default SimilarExercises;