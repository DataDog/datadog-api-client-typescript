/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableWidgetTextFormatReplaceAll } from "./TableWidgetTextFormatReplaceAll";
import { TableWidgetTextFormatReplaceSubstring } from "./TableWidgetTextFormatReplaceSubstring";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Replace rule for the table widget text format.
 */

export type TableWidgetTextFormatReplace =
  | TableWidgetTextFormatReplaceAll
  | TableWidgetTextFormatReplaceSubstring
  | UnparsedObject;
