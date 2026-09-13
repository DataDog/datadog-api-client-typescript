/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptAuthoringMessagesTemplate } from "./LLMObsPromptAuthoringMessagesTemplate";
import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A text template, a list of chat messages, or an authored chat object. Text can include an exact prompt version with `{{>prompt-id version=N}}`. Use an authored chat object when including prompts as chat messages.
 */

export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatMessage>
  | LLMObsPromptAuthoringMessagesTemplate
  | UnparsedObject;
