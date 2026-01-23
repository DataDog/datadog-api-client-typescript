import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentTypeObject } from "./IncidentTypeObject";
import { IncidentUserData } from "./IncidentUserData";
export type IncidentHandleIncludedItemResponse =
  | IncidentUserData
  | IncidentTypeObject
  | UnparsedObject;
