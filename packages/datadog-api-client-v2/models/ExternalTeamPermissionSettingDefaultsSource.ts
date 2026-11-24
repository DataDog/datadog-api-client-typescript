/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The external integration source for the permission setting default.
 */

export type ExternalTeamPermissionSettingDefaultsSource =
  | typeof GITHUB
  | typeof SCIM
  | typeof SERVICENOW
  | UnparsedObject;
export const GITHUB = "github";
export const SCIM = "scim";
export const SERVICENOW = "servicenow";
