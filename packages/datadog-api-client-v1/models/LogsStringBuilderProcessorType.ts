/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of logs string builder processor.
 */

export type LogsStringBuilderProcessorType =
  | typeof STRING_BUILDER_PROCESSOR
  | UnparsedObject;
export const STRING_BUILDER_PROCESSOR = "string-builder-processor";
