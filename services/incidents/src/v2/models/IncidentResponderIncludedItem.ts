import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentDataResponse } from "./IncidentRoleAssignmentDataResponse";
import { IncidentUserData } from "./IncidentUserData";

/**
 * A user or role assignment related to an incident responder.
 */
export type IncidentResponderIncludedItem =
  | IncidentUserData
  | IncidentRoleAssignmentDataResponse
  | UnparsedObject;
