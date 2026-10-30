/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Node field the column fills. `title` is bold text at the top of the node; `subtitle` is smaller text below it.
 */

export type TopologyMapInlineNodeStringColumnId =
  | typeof TITLE
  | typeof SUBTITLE
  | UnparsedObject;
export const TITLE = "title";
export const SUBTITLE = "subtitle";
