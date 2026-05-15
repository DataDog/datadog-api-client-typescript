/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDisplayBlockInteractionItem } from "./LLMObsDisplayBlockInteractionItem";
import { LLMObsTraceInteractionItem } from "./LLMObsTraceInteractionItem";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A single interaction to add to an annotation queue.
 */

export type LLMObsAnnotationQueueInteractionItem =
  | LLMObsTraceInteractionItem
  | LLMObsDisplayBlockInteractionItem
  | UnparsedObject;
