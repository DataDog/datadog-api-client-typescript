/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type identifier for GitHub cloud authentication intake mapping.
 */

export type GitHubCloudAuthIntakeMappingType =
  | typeof GITHUB_OIDC_AUTH_INTAKE_MAPPING
  | UnparsedObject;
export const GITHUB_OIDC_AUTH_INTAKE_MAPPING =
  "github_oidc_auth_intake_mapping";
