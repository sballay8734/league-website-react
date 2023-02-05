import { useState } from "react";
import { OwnerCard } from "../owner-card/owner-card"

export const MainView = () => {
  const [owners, updateOwners] = useState([
    {
      id: 1,
      ownerName: "Shawn Ballay",
      wins: 11,
      losses: 3
    },
    // {
    //   id: 2,
    //   ownerName: "Dominic Nocito",
    //   wins: 8,
    //   losses: 6
    // },
    // {
    //   id: 3,
    //   ownerName: "Steven Smith",
    //   wins: 8,
    //   losses: 6
    // },
    // {
    //   id: 4,
    //   ownerName: "Joe Kane",
    //   wins: 7,
    //   losses: 7
    // },
    // {
    //   id: 5,
    //   ownerName: "Stephen Lloyd",
    //   wins: 8,
    //   losses: 6
    // },
    // {
    //   id: 6,
    //   ownerName: "Cody Zwier",
    //   wins: 7,
    //   losses: 7
    // },
    // {
    //   id: 7,
    //   ownerName: "Dominic DiFilippo",
    //   wins: 7,
    //   losses: 7
    // },
    // {
    //   id: 8,
    //   ownerName: "Jimmy Wagner",
    //   wins: 6,
    //   losses: 8
    // },
    // {
    //   id: 9,
    //   ownerName: "Dan George",
    //   wins: 6,
    //   losses: 8
    // },
    // {
    //   id: 10,
    //   ownerName: "Aaron MacKenzie",
    //   wins: 6,
    //   losses: 8
    // },
    // {
    //   id: 11,
    //   ownerName: "Dante Nocito",
    //   wins: 5,
    //   losses: 9
    // },
    // {
    //   id: 12,
    //   ownerName: "Don Irons",
    //   wins: 5,
    //   losses: 9
    // }
  ])

  return (
    <div className="grid">
      {owners.map((owner) => (
        <OwnerCard
          key={owner.id}
          owner={owner} />
      ))}
    </div>
  )
}