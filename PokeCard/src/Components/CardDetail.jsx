import { Card } from "react-bootstrap"


const CardDetail = ({ widthCard, cardTitle, cardContent }) => {
  return (
    <>
      <Card style={{ width: `${widthCard}` }} className="bg-dark text-white mt-4">
        <Card.Body>
          <Card.Title className="border-bottom text-center pb-2">{cardTitle}</Card.Title>
          {/* <Card.Text> */}
          {cardContent}
          {/* </Card.Text> */}
        </Card.Body>
      </Card>
    </>
  )
}

export default CardDetail
