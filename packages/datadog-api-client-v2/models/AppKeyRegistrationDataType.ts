/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `AppKeyRegistrationDataType` object.
 */

export type AppKeyRegistrationDataType =
  | typeof APP_KEY_REGISTRATION
  | UnparsedObject;
export const APP_KEY_REGISTRATION = "app_key_registration";
