/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The SBOM component license type.
 */

export type SBOMComponentLicenseType =
  | typeof NETWORK_STRONG_COPYLEFT
  | typeof NON_STANDARD_COPYLEFT
  | typeof OTHER_NON_FREE
  | typeof OTHER_NON_STANDARD
  | typeof PERMISSIVE
  | typeof PUBLIC_DOMAIN
  | typeof STRONG_COPYLEFT
  | typeof WEAK_COPYLEFT
  | UnparsedObject;
export const NETWORK_STRONG_COPYLEFT = "network_strong_copyleft";
export const NON_STANDARD_COPYLEFT = "non_standard_copyleft";
export const OTHER_NON_FREE = "other_non_free";
export const OTHER_NON_STANDARD = "other_non_standard";
export const PERMISSIVE = "permissive";
export const PUBLIC_DOMAIN = "public_domain";
export const STRONG_COPYLEFT = "strong_copyleft";
export const WEAK_COPYLEFT = "weak_copyleft";
