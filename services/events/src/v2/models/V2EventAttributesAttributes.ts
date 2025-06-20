import { UnparsedObject } from "@datadog/datadog-api-client";

import { AlertEventAttributes } from "./AlertEventAttributes";
import { ChangeEventAttributes } from "./ChangeEventAttributes";

/**
 * JSON object for category-specific attributes.
 */
export type V2EventAttributesAttributes =
  | ChangeEventAttributes
  | AlertEventAttributes
  | UnparsedObject;
