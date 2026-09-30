/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptAuthoringMessagesTemplate } from "./LLMObsPromptAuthoringMessagesTemplate";
import { LLMObsPromptChatTemplateItem } from "./LLMObsPromptChatTemplateItem";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A text template, a list of chat messages and named message placeholders, or an authored chat object. Text can include an exact prompt version with `{{>prompt-id version=N}}`; other text, including `{{>...}}` sequences without a version, remains literal. Use an authored chat object when including prompts as chat messages.
 * **Preview**: Prompt composition is available in Preview. To request access, contact [Datadog Support](https://docs.datadoghq.com/help/) or your Customer Success Manager.
 * Without access, inline references remain literal text and structured includes are unsupported. Previously compiled prompt versions remain available for execution.
 * **Preview:** Message placeholders are available in Preview. To request access, contact [Datadog Support](https://www.datadoghq.com/support/) or your Customer Success Manager.
 */

export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatTemplateItem>
  | LLMObsPromptAuthoringMessagesTemplate
  | UnparsedObject;
