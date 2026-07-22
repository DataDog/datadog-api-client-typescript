/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of security monitoring resource to export to Terraform.
*/

export type SecurityMonitoringTerraformResourceType = typeof SUPPRESSIONS| typeof CRITICAL_ASSETS| typeof SECURITY_FILTERS| typeof RULES | UnparsedObject;
export const SUPPRESSIONS = 'suppressions';
export const CRITICAL_ASSETS = 'critical_assets';
export const SECURITY_FILTERS = 'security_filters';
export const RULES = 'rules';