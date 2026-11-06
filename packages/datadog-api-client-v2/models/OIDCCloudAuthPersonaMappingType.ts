/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type returned by the existing Custom OIDC persona mapping API.
 */

export type OIDCCloudAuthPersonaMappingType =
  | typeof CUSTOM_OIDC_IDENTITY_MAPPING
  | UnparsedObject;
export const CUSTOM_OIDC_IDENTITY_MAPPING = "custom_oidc_identity_mapping";
