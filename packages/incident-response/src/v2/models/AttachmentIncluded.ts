import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { IncidentUserData } from "./IncidentUserData";

/**
 * Objects related to an attachment.
 */
export type AttachmentIncluded = IncidentUserData | UnparsedObject;
