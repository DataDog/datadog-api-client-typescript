/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The MCP protocol version used by the step. See https://modelcontextprotocol.io/specification.
 */

export type SyntheticsMCPProtocolVersion =
  | typeof VERSION_2025_06_18
  | UnparsedObject;
export const VERSION_2025_06_18 = "2025-06-18";
