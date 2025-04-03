import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentFieldAttributesMultipleValue } from "./IncidentFieldAttributesMultipleValue";
import { IncidentFieldAttributesSingleValue } from "./IncidentFieldAttributesSingleValue";

/**
 * Dynamic fields for which selections can be made, with field names as keys.
 */
export type IncidentFieldAttributes =
  | IncidentFieldAttributesSingleValue
  | IncidentFieldAttributesMultipleValue
  | UnparsedObject;
