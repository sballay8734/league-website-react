import { useState } from "react";
import { OwnerCard } from "../owner-card/owner-card"

export const MainView = () => {
  const [year, setYear] = useState(2014);
  const [owners, updateOwners] = useState([
    {
      id: 1,
      ownerName: "Shawn Ballay",
      2014: 
        {
          wins: 11,
          losses: 3
        },
      2015: 
        {
          wins: 9,
          losses: 5
        }
    },
    // {
    //   id: 2,
    //   ownerName: "Dominic Nocito",
    //   2014: 
    //     {
    //       wins: 3,
    //       losses: 11
    //     },
    //   2015: 
    //     {
    //       wins: 10,
    //       losses: 4
    //     }
    // },
    // {
    //   id: 3,
    //   ownerName: "Steven Smith",
    //   2014: 
    //     {
    //       wins: 5,
    //       losses: 9
    //     },
    //   2015: 
    //     {
    //       wins: 13,
    //       losses: 1
    //     }
    // },
    // {
    //   id: 4,
    //   ownerName: "Joe Kane",
    //   2014: 
    //     {
    //       wins: 1,
    //       losses: 13
    //     },
    //   2015: 
    //     {
    //       wins: 7,
    //       losses: 7
    //     }
    // },
    // {
    //   id: 5,
    //   ownerName: "Stephen Lloyd",
    //   2014: 
    //     {
    //       wins: 12,
    //       losses: 2
    //     },
    //   2015: 
    //     {
    //       wins: 8,
    //       losses: 6
    //     }
    // },
    // {
    //   id: 6,
    //   ownerName: "Cody Zwier",
    //   2014: 
    //     {
    //       wins: 6,
    //       losses: 8
    //     },
    //   2015: 
    //     {
    //       wins: 9,
    //       losses: 5
    //     }
    // },
    // {
    //   id: 7,
    //   ownerName: "Dominic DiFilippo",
    //   2014: 
    //     {
    //       wins: 3,
    //       losses: 11
    //     },
    //   2015: 
    //     {
    //       wins: 10,
    //       losses: 4
    //     }
    // },
    // {
    //   id: 8,
    //   ownerName: "Jimmy Wagner",
    //   2014: 
    //     {
    //       wins: 10,
    //       losses: 4
    //     },
    //   2015: 
    //     {
    //       wins: 9,
    //       losses: 6
    //     }
    // },
    // {
    //   id: 9,
    //   ownerName: "Dan George",
    //   2014: 
    //     {
    //       wins: 11,
    //       losses: 3
    //     },
    //   2015: 
    //     {
    //       wins: 6,
    //       losses: 8
    //     }
    // },
    // {
    //   id: 10,
    //   ownerName: "Aaron MacKenzie",
    //   2014: 
    //     {
    //       wins: 3,
    //       losses: 11
    //     },
    //   2015: 
    //     {
    //       wins: 6,
    //       losses: 8
    //     }
    // },
    // {
    //   id: 11,
    //   ownerName: "Dante Nocito",
    //   2014: 
    //     {
    //       wins: 5,
    //       losses: 9
    //     },
    //   2015: 
    //     {
    //       wins: 9,
    //       losses: 5
    //     }
    // },
    // {
    //   id: 12,
    //   ownerName: "Don Irons",
    //   2014: 
    //     {
    //       wins: 7,
    //       losses: 7
    //     },
    //   2015: 
    //     {
    //       wins: 12,
    //       losses: 2
    //     }
    // }
  ])

  return (
    <div className="grid">
      {owners.map((owner) => (
        <OwnerCard
          key={owner.id}
          owner={owner}
          year={year}
          setYear={setYear} />
      ))}
    </div>
  )
}