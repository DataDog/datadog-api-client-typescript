/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Where the change was made: `UI` for the Datadog app, or `MCP` for a Model Context Protocol (MCP) client.
 */

export type FeatureFlagChangeEventCreationSource =
  | typeof UI
  | typeof MCP
  | UnparsedObject;
export const UI = "UI";
export const MCP = "MCP";
