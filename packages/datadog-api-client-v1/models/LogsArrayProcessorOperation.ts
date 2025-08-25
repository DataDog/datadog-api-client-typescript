/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArrayProcessorOperationAppend } from "./LogsArrayProcessorOperationAppend";
import { LogsArrayProcessorOperationLength } from "./LogsArrayProcessorOperationLength";
import { LogsArrayProcessorOperationSelect } from "./LogsArrayProcessorOperationSelect";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Configuration of the array processor operation to perform.
 */

export type LogsArrayProcessorOperation =
  | LogsArrayProcessorOperationAppend
  | LogsArrayProcessorOperationLength
  | LogsArrayProcessorOperationSelect
  | UnparsedObject;
