/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Get node types response resource type.
 */

export type NodeTypesResponseDataType =
  | typeof GET_NODE_TYPES_RESPONSE
  | UnparsedObject;
export const GET_NODE_TYPES_RESPONSE = "get_node_types_response";
