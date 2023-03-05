<template>
 <div class="scoreboard">
    <div class="fighter fighter1">
      <div class="fighter-name">
        <editable-name v-model="fighter1.name" message="Click to add fighter's name" editClass="fighter__name"></editable-name>
      </div>
      <div class="fighter-team">
        <editable-name v-model="fighter1.team" message="Click to add fighter's team" editClass="fighter__team"></editable-name>
      </div>
      <div class="fighter-points">{{ fighter1.score }}</div>
    </div>
    <div class="fighter fighter2">
      <div class="fighter-name">
        <editable-name v-model="fighter2.name" message="Click to add fighter's name" editClass="fighter__name"></editable-name>
      </div>
      <div class="fighter-team">
        <editable-name v-model="fighter2.team" message="Click to add fighter's team" editClass="fighter__team"></editable-name>
      </div>
      <div class="fighter-points">{{ fighter2.score }}</div>
    </div>
    <div class="score-sub">
      <div class="sub-fighter sub-fighter1">
        <div class="fau">{{ fighter1.fault }}</div>
      </div>
      <div class="chronometer">
        <span>{{ time }} </span>
      </div>
      <div class="sub-fighter  sub-fighter2">
        <div class="fau">{{ fighter2.fault }}</div>
      </div>
    </div>

</div>

</template>

<script>

import { mapGetters } from 'vuex';
import editableName from './EditableName.vue';

export default {

  name: 'scoreboard',
  components: {
    editableName,
  },
  computed: {
    ...mapGetters(['fighter1', 'fighter2','chronometer', 'time']),
  },
};
</script>
