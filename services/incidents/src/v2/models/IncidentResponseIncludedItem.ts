import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentAttachmentData } from "./IncidentAttachmentData";
import { IncidentUserData } from "./IncidentUserData";

/**
 * An object related to an incident that is included in the response.
 */
export type IncidentResponseIncludedItem =
  | IncidentUserData
  | IncidentAttachmentData
  | UnparsedObject;
