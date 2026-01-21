/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the HAMR organization connection resource.
 */

export type HamrOrgConnectionType =
  | typeof HAMR_ORG_CONNECTIONS
  | UnparsedObject;
export const HAMR_ORG_CONNECTIONS = "hamr_org_connections";
