import { UnparsedObject } from "@datadog/datadog-api-client";

import { TopologyMapInlineNodeIdColumn } from "./TopologyMapInlineNodeIdColumn";
import { TopologyMapInlineNodeStringColumn } from "./TopologyMapInlineNodeStringColumn";
import { TopologyMapInlineNodeValueColumn } from "./TopologyMapInlineNodeValueColumn";

/**
 * Column of the nodes table.
 */
export type TopologyMapInlineNodeColumn =
  | TopologyMapInlineNodeIdColumn
  | TopologyMapInlineNodeStringColumn
  | TopologyMapInlineNodeValueColumn
  | UnparsedObject;
