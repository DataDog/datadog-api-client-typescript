/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the signing keys are discovered.
 */

export type OIDCCloudAuthDiscoveryType =
  | typeof OIDC_DISCOVERY
  | typeof DIRECT_JWKS
  | UnparsedObject;
export const OIDC_DISCOVERY = "oidc_discovery";
export const DIRECT_JWKS = "direct_jwks";
