/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineNodeIdColumn } from "./TopologyMapInlineNodeIdColumn";
import { TopologyMapInlineNodeStringColumn } from "./TopologyMapInlineNodeStringColumn";
import { TopologyMapInlineNodeValueColumn } from "./TopologyMapInlineNodeValueColumn";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Column of the nodes table.
 */

export type TopologyMapInlineNodeColumn =
  | TopologyMapInlineNodeIdColumn
  | TopologyMapInlineNodeStringColumn
  | TopologyMapInlineNodeValueColumn
  | UnparsedObject;
