import { gql } from "@apollo/client";

export const LOAD_CLIENT = gql`
  {
    client {
      ipAddress {
        address
        city {
          name
          population
          location {
            lat
            long
          }
        }
        country {
          name
          population
          capital {
            name
          }
          currencies {
            name
          }
        }
      }
    }
  }
`;
