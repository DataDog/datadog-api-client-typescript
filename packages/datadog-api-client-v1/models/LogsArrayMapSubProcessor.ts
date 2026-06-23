/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArrayMapArithmeticSubProcessor } from "./LogsArrayMapArithmeticSubProcessor";
import { LogsArrayMapAttributeRemapper } from "./LogsArrayMapAttributeRemapper";
import { LogsArrayMapCategorySubProcessor } from "./LogsArrayMapCategorySubProcessor";
import { LogsArrayMapStringBuilderSubProcessor } from "./LogsArrayMapStringBuilderSubProcessor";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A sub-processor used inside an array-map processor.
 * Allowed types: `attribute-remapper`, `string-builder-processor`,
 * `arithmetic-processor`, `category-processor`.
 */

export type LogsArrayMapSubProcessor =
  | LogsArrayMapAttributeRemapper
  | LogsArrayMapArithmeticSubProcessor
  | LogsArrayMapStringBuilderSubProcessor
  | LogsArrayMapCategorySubProcessor
  | UnparsedObject;
