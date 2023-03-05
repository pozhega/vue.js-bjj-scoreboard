<template>
  <p>
    <span @click="editing=true" v-show="!editing && value === ''" :class="editClass">
      {{ message }}
    </span>
    <span style="text-transform: uppercase" @click="editing=true" v-show="!editing && value !== ''">
      {{value}}
    </span>
    <span v-show="editing">
      <input :value="value"
            @input="$emit('input', $event.target.value)"
            @keydown.enter="editing=false"
            @blur="editing=false"
            type="text" 
            class="form-control">
    </span>
  </p>  
</template>
<script>
  export default {
    name: 'EditableName',
    props:['value', 'message', 'editClass'],
    data(){
      return {
        editing: false,
      }
    },
    updated() {
      const inputForm = document.getElementsByClassName('form-control')[0]
      if (inputForm) inputForm.focus()
    }
  };
</script>
