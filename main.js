import './style.css'

async function fetchActivity() {
  // ?people=5&cost=
  const searchParams = new URLSearchParams(window.location.search)

  const people = searchParams.get('people')
  const cost = searchParams.get('cost')

  const newSearchParams = new URLSearchParams({
    participants: people,
    price: cost,
  })

  const response = await fetch(
    `http://www.boredapi.com/api/activity?${newSearchParams.toString()}`
  )
  return await response.json()
}

const activityElement = document.getElementById('activity')

const activity = await fetchActivity()

activityElement.textContent = activity.activity || activity.error
