<template>
  <table id="top-scorers" class="mx-auto p-20 my-6 text-center">
    <thead>
      <tr>
        <td>Name</td>
        <td>Team</td>
        <td>Goals</td>
      </tr>
    </thead>
    <tbody>
      <tr
        class=""
        v-for="(player, i) in players" :key="i">
        <td> {{ player.name }} </td>
        <td> {{ player.team }} </td>
        <td> {{ player.goals }} </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TopScorersTable',
  data() {
    return {
      players: [
        {
          name: 'Jose "Pepe" Argento',
          team: 'U1',
          goals: 15
        },
        {
          name: 'Mónica "Moni" Potreli',
          team: 'U1',
          goals: 15
        },
        {
          name: 'María Elena Fuseneco',
          team: 'U1',
          goals: 15
        },
        {
          name: 'Dardo Fuseneco',
          team: 'U1',
          goals: 15
        },
        {
          name: 'Alfio "Coqui" Argento',
          team: 'U1',
          goals: 15
        },
        {
          name: 'Paola Argento',
          team: 'U1',
          goals: 15
        }
      ]
    }
  }
}
</script>

<style scoped>
  td {
    @apply px-3 py-2;
  }

  #top-scorers thead>tr {
    @apply border-solid border-b border-gray-600 w-full;
  }
</style>