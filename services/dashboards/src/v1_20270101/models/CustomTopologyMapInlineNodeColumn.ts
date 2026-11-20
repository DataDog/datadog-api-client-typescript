import { UnparsedObject } from "@datadog/datadog-api-client";

import { CustomTopologyMapInlineNodeIdColumn } from "./CustomTopologyMapInlineNodeIdColumn";
import { CustomTopologyMapInlineNodeStringColumn } from "./CustomTopologyMapInlineNodeStringColumn";
import { CustomTopologyMapInlineNodeValueColumn } from "./CustomTopologyMapInlineNodeValueColumn";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CustomTopologyMapInlineNodeColumn =
  | CustomTopologyMapInlineNodeIdColumn
  | CustomTopologyMapInlineNodeStringColumn
  | CustomTopologyMapInlineNodeValueColumn
  | UnparsedObject;
