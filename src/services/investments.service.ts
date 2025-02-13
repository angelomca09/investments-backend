import { InvestmentsStatus } from "../enums/InvestmentsStatus";
import { InvestmentsType } from "../enums/InvestmentsType";
import { Investments } from "../interfaces/Investments";

async function getInvestments(): Promise<Investments[]> {

  //TODO: Implement the logic to get the investments from the database
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          description: "Investment 1",
          value: 1000,
          date: "2021-01-01",
          status: InvestmentsStatus.DONE,
          type: InvestmentsType.GAMES,
        },
        {
          id: 2,
          description: "Investment 2",
          value: 500,
          date: "2021-01-01",
          status: InvestmentsStatus.PENDING,
          type: InvestmentsType.HEALTH_CARE,
        },
        {
          id: 3,
          description: "Investment 3",
          value: 2000,
          date: "2021-01-01",
          status: InvestmentsStatus.CANCELED,
          type: InvestmentsType.BILLS,
        }
      ]);
    }, 1000);
  });
}

export default { getInvestments };