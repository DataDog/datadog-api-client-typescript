/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptChatTemplateItem } from "./LLMObsPromptChatTemplateItem";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A text template or a list of chat messages and named message placeholders.
 * **Preview:** Message placeholders are available in Preview. To request access, contact [Datadog Support](https://www.datadoghq.com/support/) or your Customer Success Manager.
 */

export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatTemplateItem>
  | UnparsedObject;
