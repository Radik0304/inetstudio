<template>
    <v-container>
        <v-col cols="12" md="4">
            <v-select v-model="variant" :items="country" clearable label="Filter by country"></v-select>
            <v-select v-model="variant" :items="score" clearable label="Filter by score"></v-select>
        </v-col>
    </v-container>
</template>

<script>
export default {
    name: 'UsersFilters',
    data: () => ({
        variant_country: 'default',
        variant_score: 'default'
    }),
}
</script>