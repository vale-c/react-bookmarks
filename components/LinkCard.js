import React, {Fragment} from 'react';

const LinkCard = props => {

  const mappedData = props.cards.map((card, i) => {
    return(
      <div key={i} className="linkCard">
        <div className="linkCardImage"/>
        <div className="linkCardLink"><h2><a href={card.linkHref}>{card.linkName}</a></h2></div>
      </div>
    )
  })

  return(
    <Fragment>
      {mappedData}
    </Fragment>
  )
}

export default LinkCard