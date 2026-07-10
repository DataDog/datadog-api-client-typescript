import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentUserData } from "./IncidentUserData";

/**
 * An object related to a postmortem that is included in the response.
 */
export type IncidentPostmortemIncluded =
  | IncidentUserData
  | IncidentResponseData
  | UnparsedObject;
