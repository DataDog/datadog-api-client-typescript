import { UnparsedObject } from "@datadog/datadog-api-client";

import { AlertEventCustomAttributes } from "./AlertEventCustomAttributes";
import { ChangeEventCustomAttributes } from "./ChangeEventCustomAttributes";

/**
 * JSON object for custom attributes. Schema is different per event category.
 */
export type EventPayloadAttributes =
  | ChangeEventCustomAttributes
  | AlertEventCustomAttributes
  | UnparsedObject;
