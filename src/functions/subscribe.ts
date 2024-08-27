import axios from "axios"

const mainGroupId = "82144469098431562"

export const subscribeToMailingList = async (email: string): Promise<{success: boolean}> => {
  const body = {
    email: email,
    groups: [mainGroupId],
    status: "active"
  }

  const subscribe = await axios.post("https://connect.mailerlite.com/api/subscribers", body, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API}`
    }
  })

  if (subscribe.status < 400) {
    return {success: true}
  } else {
    return {success: false}
  }
}