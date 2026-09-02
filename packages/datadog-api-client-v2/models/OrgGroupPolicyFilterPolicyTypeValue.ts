/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the policy to filter by. `org_config` indicates a policy backed by an organization configuration setting. `role` indicates a policy backed by a Datadog custom role.
 */

export type OrgGroupPolicyFilterPolicyTypeValue =
  | typeof ORG_CONFIG
  | typeof ROLE
  | UnparsedObject;
export const ORG_CONFIG = "org_config";
export const ROLE = "role";
