import { UnparsedObject } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributes } from "./ChangeEventCustomAttributes";

/**
 * JSON object for custom attributes. Schema are different per each event category.
 */
export type EventPayloadAttributes =
  | ChangeEventCustomAttributes
  | UnparsedObject;
