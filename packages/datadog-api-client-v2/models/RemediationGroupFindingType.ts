/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Value of the findings' `@finding_type` attribute that a grouping definition covers.
 */

export type RemediationGroupFindingType =
  | typeof LIBRARY_VULNERABILITY
  | UnparsedObject;
export const LIBRARY_VULNERABILITY = "library_vulnerability";
