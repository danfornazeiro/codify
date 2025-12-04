const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, "")
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"))
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  )

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("msgemail").innerHTML = "E-mail válido"
    alert("E-mail valido")
  } else {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>E-mail inválido </font>"
    alert("E-mail invalido")
  }
}

// Menu hambúrguer
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle")
  const nav = document.getElementById("primary-nav")

  if (!toggle || !nav) return

  // Precarrega o ícone; se falhar, mostra as barras (fallback)
  const icon = new Image()
  icon.onload = () => {
    // nada a fazer; imagem disponível
  }
  icon.onerror = () => {
    toggle.classList.add("no-img")
  }
  icon.src = "assets/cardapio.png"

  const closeMenu = () => {
    nav.classList.remove("open")
    toggle.classList.remove("active")
    toggle.setAttribute("aria-expanded", "false")
    toggle.setAttribute("aria-label", "Abrir menu")
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open")
    toggle.classList.toggle("active", isOpen)
    toggle.setAttribute("aria-expanded", String(isOpen))
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu")
  })

  // Fecha ao clicar em um link do menu
  nav.addEventListener("click", (e) => {
    const target = e.target
    if (target && target.closest("a")) {
      closeMenu()
    }
  })

  // Fecha ao redimensionar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu()
    }
  })
})
