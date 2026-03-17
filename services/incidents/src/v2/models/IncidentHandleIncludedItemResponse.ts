import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentTypeObject } from "./IncidentTypeObject";
import { IncidentUserData } from "./IncidentUserData";

/**
 * A single included resource item in an incident handle response, which can be a user or an incident type.
 */
export type IncidentHandleIncludedItemResponse =
  | IncidentUserData
  | IncidentTypeObject
  | UnparsedObject;
