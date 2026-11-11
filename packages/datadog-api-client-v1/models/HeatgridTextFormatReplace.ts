/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridTextFormatReplaceAll } from "./HeatgridTextFormatReplaceAll";
import { HeatgridTextFormatReplaceSubstring } from "./HeatgridTextFormatReplaceSubstring";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Replace all or part of a matching group label.
 */

export type HeatgridTextFormatReplace =
  | HeatgridTextFormatReplaceAll
  | HeatgridTextFormatReplaceSubstring
  | UnparsedObject;
