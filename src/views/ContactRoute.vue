<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { sendEmail } from '@/libs/sendEmail'

const formInputs = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formErrors = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const validateForm = () => {
  let isValid = true

  // Validate name
  if (!formInputs.value.name) {
    formErrors.value.name = 'Name is required.'
    isValid = false
  } else {
    formErrors.value.name = ''
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formInputs.value.email) {
    formErrors.value.email = 'Email is required.'
    isValid = false
  } else if (!emailPattern.test(formInputs.value.email)) {
    formErrors.value.email = 'Please enter a valid email address.'
    isValid = false
  } else {
    formErrors.value.email = ''
  }

  // Validate message
  if (!formInputs.value.message) {
    formErrors.value.message = 'Message is required.'
    isValid = false
  } else {
    formErrors.value.message = ''
  }

  return isValid
}

const validateInput = (field) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  switch (field) {
    case 'name':
      if (!formInputs.value.name) {
        formErrors.value.name = 'Name is required.'
      } else {
        formErrors.value.name = ''
      }
      break
    case 'email':
      if (!formInputs.value.email) {
        formErrors.value.email = 'Email is required.'
      } else if (!emailPattern.test(formInputs.value.email)) {
        formErrors.value.email = 'Please enter a valid email address.'
      } else {
        formErrors.value.email = ''
      }
      break
    case 'message':
      if (!formInputs.value.message) {
        formErrors.value.message = 'Message is required.'
      } else {
        formErrors.value.message = ''
      }
      break
  }
}

const submitForm = async () => {
  if (validateForm()) {
    try {
      const formData = new FormData()
      formData.append('name', formInputs.value.name)
      formData.append('email', formInputs.value.email)
      formData.append('subject', formInputs.value.subject)
      formData.append('message', formInputs.value.message)
      formData.append('access_key', 'b1c64838-f731-4f25-bde9-8112bf7f1995')
      await sendEmail(formData)

      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Your message has been sent successfully!',
      })

      // Reset form inputs
      formInputs.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    } catch (error) {
      console.error('Error sending email:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error sending your message. Please try again later.',
      })
    }
  } else {
    // Form is invalid, show error message
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Please correct the errors in the form before submitting.',
    })
  }
}
</script>

<template>
  <div class="p-10 flex-1 flex flex-col gap-5">
    <!-- Contact me card -->
    <div class="flex flex-col items-center">
      <!-- Card title banner -->
      <div class="flex relative h-10">
        <!-- Left edge -->
        <div class="title-left-edge border-r-[#34b1d0]"></div>
        <div class="title-banner bg-[#34b1d0]">
          <h3 class="font-semibold italic text-white text-xl">Contact Me</h3>
        </div>
        <!-- Right edge -->
        <div class="title-right-edge border-l-[#34b1d0]"></div>
      </div>
      <!-- Detail part -->
      <div class="card-inner bg-[#4f9ccf]/80">
        <!-- Contact inputs -->
        <div class="text-white p-5 bg-[#214566]">
          <form novalidate @submit.prevent="submitForm">
            <ul class="flex flex-col gap-5">
              <li>
                <div class="flex gap-3">
                  <label for="name" class="block mb-2">Name</label>
                  <span class="text-red-500 text-xs mt-1"
                    ><em>{{ formErrors.name }}</em></span
                  >
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="formInputs.name"
                  @blur="validateInput('name')"
                  @input="validateInput('name')"
                  class="w-full p-2 rounded bg-white text-black transition focus:outline-none focus:ring-2 focus:ring-[#34b1d0]"
                  required
                />
              </li>
              <li>
                <div class="flex gap-3">
                  <label for="email" class="block mb-2">Email</label>
                  <span class="text-red-500 text-xs mt-1"
                    ><em>{{ formErrors.email }}</em></span
                  >
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="formInputs.email"
                  @blur="validateInput('email')"
                  @input="validateInput('email')"
                  class="w-full p-2 rounded bg-white text-black transition focus:outline-none focus:ring-2 focus:ring-[#34b1d0]"
                  required
                />
              </li>
              <li>
                <label for="subject" class="block mb-2"
                  >Subject <span class="text-xs mt-1"><em>(optional)</em></span></label
                >
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  v-model="formInputs.subject"
                  class="w-full p-2 rounded bg-white text-black transition focus:outline-none focus:ring-2 focus:ring-[#34b1d0]"
                />
              </li>
              <li>
                <div class="flex gap-3">
                  <label for="message" class="block mb-2">Message</label>
                  <span class="text-red-500 text-xs mt-1"
                    ><em>{{ formErrors.message }}</em></span
                  >
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  class="w-full p-2 rounded bg-white text-black transition focus:outline-none focus:ring-2 focus:ring-[#34b1d0]"
                  required
                  @blur="validateInput('message')"
                  @input="validateInput('message')"
                  v-model="formInputs.message"
                ></textarea>
              </li>
              <li>
                <button
                  type="submit"
                  class="mt-4 px-4 py-2 bg-[#34b1d0] text-white rounded hover:bg-[#2a8bb0] transition"
                >
                  Send Message
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-left-edge {
  position: relative;
  border-right-width: 1.25rem;
  border-right-style: solid;
  border-top: 1.25rem solid transparent;
  border-bottom: 1.25rem solid transparent;
}

.title-banner {
  display: flex;
  height: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  align-items: center;
  overflow: hidden;
}

.title-right-edge {
  position: relative;
  border-left-width: 1.25rem;
  border-left-style: solid;
  border-top: 1.25rem solid transparent;
  border-bottom: 1.25rem solid transparent;
}

.card-inner {
  margin-top: -1.25rem;
  padding-top: 2.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;
  width: 100%;
}
</style>
