/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Security rule type
 */

export type SecurityRuleTypesItems =
  | typeof APPLICATION_CODE_VULNERABILITY
  | typeof APPLICATION_LIBRARY_VULNERABILITY
  | typeof ATTACK_PATH
  | typeof CONTAINER_IMAGE_VULNERABILITY
  | typeof HOST_VULNERABILITY
  | typeof IDENTITY_RISK
  | typeof MISCONFIGURATION
  | typeof API_SECURITY
  | UnparsedObject;
export const APPLICATION_CODE_VULNERABILITY = "application_code_vulnerability";
export const APPLICATION_LIBRARY_VULNERABILITY =
  "application_library_vulnerability";
export const ATTACK_PATH = "attack_path";
export const CONTAINER_IMAGE_VULNERABILITY = "container_image_vulnerability";
export const HOST_VULNERABILITY = "host_vulnerability";
export const IDENTITY_RISK = "identity_risk";
export const MISCONFIGURATION = "misconfiguration";
export const API_SECURITY = "api_security";
