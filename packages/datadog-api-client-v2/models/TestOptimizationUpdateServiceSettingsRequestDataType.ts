/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API type for update service settings request.
 * The value must always be `test_optimization_update_service_settings_request`.
 */

export type TestOptimizationUpdateServiceSettingsRequestDataType =
  | typeof TEST_OPTIMIZATION_UPDATE_SERVICE_SETTINGS_REQUEST
  | UnparsedObject;
export const TEST_OPTIMIZATION_UPDATE_SERVICE_SETTINGS_REQUEST =
  "test_optimization_update_service_settings_request";
