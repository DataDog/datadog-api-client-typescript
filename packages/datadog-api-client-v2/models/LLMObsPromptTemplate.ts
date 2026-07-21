/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A text template or a list of chat messages.
 */

export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatMessage>
  | UnparsedObject;
