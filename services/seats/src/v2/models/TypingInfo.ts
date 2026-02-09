import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AssignSeatsUserRequest } from "./AssignSeatsUserRequest";
import { AssignSeatsUserRequestData } from "./AssignSeatsUserRequestData";
import { AssignSeatsUserRequestDataAttributes } from "./AssignSeatsUserRequestDataAttributes";
import { AssignSeatsUserResponse } from "./AssignSeatsUserResponse";
import { AssignSeatsUserResponseData } from "./AssignSeatsUserResponseData";
import { AssignSeatsUserResponseDataAttributes } from "./AssignSeatsUserResponseDataAttributes";
import { SeatUserData } from "./SeatUserData";
import { SeatUserDataArray } from "./SeatUserDataArray";
import { SeatUserDataAttributes } from "./SeatUserDataAttributes";
import { SeatUserMeta } from "./SeatUserMeta";
import { UnassignSeatsUserRequest } from "./UnassignSeatsUserRequest";
import { UnassignSeatsUserRequestData } from "./UnassignSeatsUserRequestData";
import { UnassignSeatsUserRequestDataAttributes } from "./UnassignSeatsUserRequestDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SeatAssignmentsDataType: ["seat-assignments"],
    SeatUserDataType: ["seat-users"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AssignSeatsUserRequest: AssignSeatsUserRequest,
    AssignSeatsUserRequestData: AssignSeatsUserRequestData,
    AssignSeatsUserRequestDataAttributes: AssignSeatsUserRequestDataAttributes,
    AssignSeatsUserResponse: AssignSeatsUserResponse,
    AssignSeatsUserResponseData: AssignSeatsUserResponseData,
    AssignSeatsUserResponseDataAttributes:
      AssignSeatsUserResponseDataAttributes,
    SeatUserData: SeatUserData,
    SeatUserDataArray: SeatUserDataArray,
    SeatUserDataAttributes: SeatUserDataAttributes,
    SeatUserMeta: SeatUserMeta,
    UnassignSeatsUserRequest: UnassignSeatsUserRequest,
    UnassignSeatsUserRequestData: UnassignSeatsUserRequestData,
    UnassignSeatsUserRequestDataAttributes:
      UnassignSeatsUserRequestDataAttributes,
  },
};
