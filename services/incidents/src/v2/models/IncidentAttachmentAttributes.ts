import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentAttachmentLinkAttributes } from "./IncidentAttachmentLinkAttributes";
import { IncidentAttachmentPostmortemAttributes } from "./IncidentAttachmentPostmortemAttributes";

/**
 * The attributes object for an attachment.
 */
export type IncidentAttachmentAttributes =
  | IncidentAttachmentPostmortemAttributes
  | IncidentAttachmentLinkAttributes
  | UnparsedObject;
