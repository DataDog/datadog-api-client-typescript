import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AlertEventCustomAttributes } from "./AlertEventCustomAttributes";
import { ChangeEventCustomAttributes } from "./ChangeEventCustomAttributes";

/**
 * JSON object for category-specific attributes. Schema is different per event category.
 */
export type EventPayloadAttributes =
  | ChangeEventCustomAttributes
  | AlertEventCustomAttributes
  | UnparsedObject;
