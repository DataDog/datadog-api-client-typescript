import { UnparsedObject } from "@datadog/datadog-api-client";

import { AIGuardContentPart } from "./AIGuardContentPart";

/**
 * The message content, either a plain string or an array of content parts.
 */
export type AIGuardMessageContent =
  | string
  | Array<AIGuardContentPart>
  | UnparsedObject;
