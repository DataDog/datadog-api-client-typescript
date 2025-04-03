import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentAttachmentLinkAttributes } from "./IncidentAttachmentLinkAttributes";
import { IncidentAttachmentPostmortemAttributes } from "./IncidentAttachmentPostmortemAttributes";

/**
 * Incident attachment attributes.
 */
export type IncidentAttachmentUpdateAttributes =
  | IncidentAttachmentPostmortemAttributes
  | IncidentAttachmentLinkAttributes
  | UnparsedObject;
