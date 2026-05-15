/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDisplayBlockInteractionResponseItem } from "./LLMObsDisplayBlockInteractionResponseItem";
import { LLMObsTraceInteractionResponseItem } from "./LLMObsTraceInteractionResponseItem";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A single interaction result.
 */

export type LLMObsAnnotationQueueInteractionResponseItem =
  | LLMObsTraceInteractionResponseItem
  | LLMObsDisplayBlockInteractionResponseItem
  | UnparsedObject;
