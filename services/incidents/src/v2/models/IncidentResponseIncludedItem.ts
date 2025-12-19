import { UnparsedObject } from "@datadog/datadog-api-client";

import { AttachmentData } from "./AttachmentData";
import { IncidentUserData } from "./IncidentUserData";

/**
 * An object related to an incident that is included in the response.
 */
export type IncidentResponseIncludedItem =
  | IncidentUserData
  | AttachmentData
  | UnparsedObject;
