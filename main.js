async function compile() {
  const res = await fetch(new URL('./index.js', import.meta.url).href)
  const script = await res.text()
  if (/use custom mode/.test(script)) {
    return new Function(`
      const macros = () => console.log('macros define');\n
    `+script)()
  }
}
compile()