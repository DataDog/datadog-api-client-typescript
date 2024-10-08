/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetLegacyLiveSpan } from "./WidgetLegacyLiveSpan";
import { WidgetNewFixedSpan } from "./WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "./WidgetNewLiveSpan";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Time setting for the widget.
 */

export type WidgetTime =
  | WidgetLegacyLiveSpan
  | WidgetNewLiveSpan
  | WidgetNewFixedSpan
  | UnparsedObject;
