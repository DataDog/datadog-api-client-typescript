import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentTimelineCellMarkdownCreateAttributes } from "./IncidentTimelineCellMarkdownCreateAttributes";

/**
 * The timeline cell's attributes for a create request.
 */
export type IncidentTimelineCellCreateAttributes =
  | IncidentTimelineCellMarkdownCreateAttributes
  | UnparsedObject;
