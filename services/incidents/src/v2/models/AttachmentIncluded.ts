import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentUserData } from "./IncidentUserData";

/**
 * Objects related to an attachment.
 */
export type AttachmentIncluded = IncidentUserData | UnparsedObject;
