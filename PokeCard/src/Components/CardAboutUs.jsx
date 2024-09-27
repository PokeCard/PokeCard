import Card from "react-bootstrap/Card";

const CardAboutUs = () => {
  let Gambar = ["https://avatars.githubusercontent.com/u/89517552?s=96&v=4", "https://avatars.githubusercontent.com/u/175142981?v=4", "https://avatars.githubusercontent.com/u/176256023?v=4"]
  let Name = ['Julio Andarestu', 'Diana Novita', 'Ivan Dana Saputra']
  let Motto = ["All is Well", "Nothing to Lose", "Everything is Going to be Allright"]
  let LinkGitHub = ["https://github.com/julioandarestu", "https://github.com/diananov11", "https://github.com/ivandanasaputra"]

  return (
    <>
      <div class="row">
        <div>
          <Card style={{ width: "16rem" }} className="mt-4 mb-4">
            <Card.Img className="object-fit-sm-cover border rounded" variant="top" src={Gambar[i]} />
            <Card.Body>
              <Card.Title>{Name[i]}</Card.Title>
              <Card.Text>
                {Motto[i]}
              </Card.Text>
              <Card.Link href={LinkGitHub[i]}>My Github</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardAboutUs;
