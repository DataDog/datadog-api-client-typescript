/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetTime20270101OneOf } from "./WidgetTime20270101OneOf";
import { WidgetTime20270101OneOf4464103552 } from "./WidgetTime20270101OneOf4464103552";
import { WidgetTime20270101OneOf4464104512 } from "./WidgetTime20270101OneOf4464104512";
import { WidgetTime20270101OneOf4464105312 } from "./WidgetTime20270101OneOf4464105312";
import { WidgetTime20270101OneOf4464105952 } from "../../datadog-api-client-v1/models/WidgetTime20270101OneOf4464105952";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type WidgetTime =
  | WidgetTime20270101OneOf
  | WidgetTime20270101OneOf4464103552
  | WidgetTime20270101OneOf4464104512
  | WidgetTime20270101OneOf4464105312
  | WidgetTime20270101OneOf4464105952
  | any
  | UnparsedObject;
