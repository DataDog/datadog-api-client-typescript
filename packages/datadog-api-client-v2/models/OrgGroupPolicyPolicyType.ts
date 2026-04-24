/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the policy. Only `org_config` is supported, indicating a policy backed by an organization configuration setting.
 */

export type OrgGroupPolicyPolicyType = typeof ORG_CONFIG | UnparsedObject;
export const ORG_CONFIG = "org_config";
