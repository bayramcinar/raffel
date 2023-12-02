import React from 'react';
import '../style/raffleCard.css';

function RaffleCard({ raffleName, raffleImage, rules }) {
  return (
    <div>
      <div className="card w-56 m-4 raffle-card">
        <div className="w-58">
          <img src={raffleImage} className="card-img-top object-contain rounded-2xl" alt={raffleName} />
        </div>
        <div className="card-body justify-center items-center">
          <h5 className="card-title text-cardText font-semibold text-2xl text-center">{raffleName}</h5>
          <ul className="list-group">
            {rules.map((rule, index) => (
              <li className="list-group-item" key={index}>
                {`${index + 1}. ${rule}`}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center m-3">
            <button className="btn btn-primary text-center">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaffleCard;
