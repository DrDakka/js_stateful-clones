'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  function addProps(state, extraData) {
    Object.assign(state, extraData);
  }

  function removeProps (state, keysToRemove) {
    for (const key of keysToRemove) {
      delete state[key];
    }
  }

  function clear (state) {
    for (const i of state) {
      delete state[i];
    }
  }

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProps(state, action.extraData);
        break;

      case 'removeProperties':
        removeProps(state, action.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;
    }
  }
}

module.exports = transformStateWithClones;
