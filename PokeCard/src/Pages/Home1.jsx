

const Home1 = () => {
  // GET DATA
  const readData = async () => {
    try {
      setIsLoading(true)
      let { data } = await axios.get
      setTodos(data)
      setTodosData(data)
      setIsLoading(false)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => { readData(); }, [])

  return (
    <div>

    </div>
  )
}

export default Home1
