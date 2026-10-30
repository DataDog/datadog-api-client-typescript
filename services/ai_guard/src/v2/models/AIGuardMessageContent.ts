import { UnparsedObject } from "@datadog/datadog-api-client";

import { AIGuardContentPart } from "./AIGuardContentPart";

/**
 * The content of a message, either a plain string or a list of OpenAI-style content parts.
 */
export type AIGuardMessageContent =
  | string
  | Array<AIGuardContentPart>
  | UnparsedObject;
