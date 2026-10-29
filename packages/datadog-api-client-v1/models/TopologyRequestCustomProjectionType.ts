/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Projection type. Each result row is a node.
 */

export type TopologyRequestCustomProjectionType =
  | typeof CUSTOM_TOPOLOGY_MAP_NODE
  | UnparsedObject;
export const CUSTOM_TOPOLOGY_MAP_NODE = "custom_topology_map_node";
