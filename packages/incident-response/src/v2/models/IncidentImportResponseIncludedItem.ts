import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { IncidentTypeObject } from "./IncidentTypeObject";
import { IncidentUserData } from "./IncidentUserData";

/**
 * An object related to an incident that is included in the response.
 */
export type IncidentImportResponseIncludedItem =
  | IncidentUserData
  | IncidentTypeObject
  | UnparsedObject;
