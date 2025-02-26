'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {

  const result = { ...state}

  function addProps(result, extraData) {
    Object.assign(result, extraData);
  }

  function removeProps (result, keysToRemove) {
    for (const key of keysToRemove) {
      delete result[key];
    }
  }

  function clear (result) {
    for (const i of result) {
      delete result[i];
    }
  }

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProps(result, action.extraData);
        break;

      case 'removeProperties':
        removeProps(result, action.keysToRemove);
        break;

      case 'clear':
        clear(result);
        break;
    }
  }

  return result;
}

module.exports = transformStateWithClones;
