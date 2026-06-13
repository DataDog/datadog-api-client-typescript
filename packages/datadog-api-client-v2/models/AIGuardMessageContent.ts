/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardContentPart } from "./AIGuardContentPart";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The message content, either a plain string or an array of content parts.
 */

export type AIGuardMessageContent =
  | string
  | Array<AIGuardContentPart>
  | UnparsedObject;
