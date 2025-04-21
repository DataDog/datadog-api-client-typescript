import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { User } from "./User";
import { UserDisableResponse } from "./UserDisableResponse";
import { UserListResponse } from "./UserListResponse";
import { UserResponse } from "./UserResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AccessRole: ["st", "adm", "ro", "ERROR"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    User: User,
    UserDisableResponse: UserDisableResponse,
    UserListResponse: UserListResponse,
    UserResponse: UserResponse,
  },
};
