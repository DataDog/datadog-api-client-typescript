import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentImportFieldAttributesMultipleValue } from "./IncidentImportFieldAttributesMultipleValue";
import { IncidentImportFieldAttributesSingleValue } from "./IncidentImportFieldAttributesSingleValue";

/**
 * Dynamic fields for which selections can be made, with field names as keys.
 */
export type IncidentImportFieldAttributes =
  | IncidentImportFieldAttributesSingleValue
  | IncidentImportFieldAttributesMultipleValue
  | UnparsedObject;
