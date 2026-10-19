/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Agent type associated with the resource.
 */

export type AgentHealthAgentType =
  | typeof NODE
  | typeof CLUSTER
  | UnparsedObject;
export const NODE = "node";
export const CLUSTER = "cluster";
