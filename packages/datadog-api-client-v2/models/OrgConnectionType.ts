/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Org connection type.
 */

export type OrgConnectionType = typeof ORG_CONNECTION | UnparsedObject;
export const ORG_CONNECTION = "org_connection";
