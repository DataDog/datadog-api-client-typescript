/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type identifier for an HCP Terraform persona mapping.
 */

export type TerraformCloudAuthPersonaMappingType =
  | typeof TERRAFORM_CLOUD_AUTH_CONFIG
  | UnparsedObject;
export const TERRAFORM_CLOUD_AUTH_CONFIG = "terraform_cloud_auth_config";
