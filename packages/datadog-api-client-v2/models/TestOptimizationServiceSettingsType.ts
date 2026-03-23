/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API type for service settings response.
 * The value must always be `test_optimization_service_settings`.
 */

export type TestOptimizationServiceSettingsType =
  | typeof TEST_OPTIMIZATION_SERVICE_SETTINGS
  | UnparsedObject;
export const TEST_OPTIMIZATION_SERVICE_SETTINGS =
  "test_optimization_service_settings";
