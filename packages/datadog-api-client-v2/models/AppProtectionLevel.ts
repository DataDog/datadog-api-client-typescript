/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The publication protection level of the app. `approval_required` means changes must go through an approval workflow before being published.
 */

export type AppProtectionLevel =
  | typeof DIRECT_PUBLISH
  | typeof APPROVAL_REQUIRED
  | UnparsedObject;
export const DIRECT_PUBLISH = "direct_publish";
export const APPROVAL_REQUIRED = "approval_required";
