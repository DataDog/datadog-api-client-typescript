/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type for a JSON Patch request on a Synthetic test suite, `suites_json_patch`.
 */

export type SuiteJsonPatchType = typeof SUITES_JSON_PATCH | UnparsedObject;
export const SUITES_JSON_PATCH = "suites_json_patch";
