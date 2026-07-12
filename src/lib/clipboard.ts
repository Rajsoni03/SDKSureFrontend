import toast from 'react-hot-toast'

export function copyToClipboard(text: string, label = 'Copied!'): Promise<void> {
  const finish = (ok: boolean) => {
    if (ok) toast.success(label, { duration: 1500 })
    else toast.error('Copy failed')
    return ok ? Promise.resolve() : Promise.reject(new Error('Copy failed'))
  }

  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => finish(true), () => finish(false))
  }

  const el = document.createElement('textarea')
  el.value = text
  el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0'
  document.body.appendChild(el)
  el.focus()
  el.select()
  const ok = document.execCommand('copy')
  document.body.removeChild(el)
  return finish(ok)
}
