const substitutions = []
const m = require('module')
const originalLoader = m._load

m._load = function (request, parent, isMain) {
  for (let subs of substitutions) {
    const subsVal = subs(request, parent)
    if (subsVal !== undefined) {
      return subsVal
    }
  }
  return originalLoader(request, parent, isMain)
}

function remove (substitution) {
  const index = substitutions.indexOf(substitution)
  if (index !== -1) {
    return substitutions.splice(index, 1)
  } else {
    return false
  }
}

module.exports = {
  add: function (substitution) {
    substitutions.push(substitution)
    return () => {
      remove(substitution)
    }
  },
  remove: remove
}
