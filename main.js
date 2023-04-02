async function compile() {
  const res = await fetch(new URL('./index.js', import.meta.url).href)
  let script = await res.text()

  const execute = code => new Function(code)()

  if (/'use custom mode';/.test(script)) {
    script = script.replaceAll(`'use custom mode';`, `const macros = () => console.log('macros define');\n`)
    console.log(script)
  }
  else if (/"use custom mode";/.test(script)) {
    script = script.replaceAll(`"use custom mode";`, `const macros = () => console.log('macros define');\n`)
  }
  else if (/'use custom mode'/.test(script)) {
    script = script.replaceAll(`'use custom mode'`, `const macros = () => console.log('macros define');\n`)
  }
  else if (/"use custom mode"/.test(script)) {
    script = script.replaceAll(`"use custom mode"`, `const macros = () => console.log('macros define');\n`)
  }
  execute(script)
}

compile()