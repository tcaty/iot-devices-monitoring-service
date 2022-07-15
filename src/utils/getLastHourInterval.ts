const getLastHourInterval = () => {
  const now = new Date()
  const temp = new Date()
  temp.setHours(temp.getHours() - 1)
  return {
    startDate: temp.toISOString(),
    endDate: now.toISOString(),
  }
}

export default getLastHourInterval
