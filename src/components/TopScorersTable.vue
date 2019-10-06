<template>
  <div class="my-8 mx-6">
    <table id="top-scorers" class="w-full mx-auto text-center">
      <thead>
        <tr class="tracking-tight font-display text-2xl">
          <td>Name</td>
          <td>Team</td>
          <td>Goals</td>
        </tr>
      </thead>
      <tbody>
        <tr
          class="opacity-75"
          v-for="(player, i) in players" :key="i">
          <td> {{ player.name }} </td>
          <td> {{ player.team }} </td>
          <td> {{ player.goals }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TopScorersTable',
  data () {
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
