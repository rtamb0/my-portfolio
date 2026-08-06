export async function sendEmail(formData) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
