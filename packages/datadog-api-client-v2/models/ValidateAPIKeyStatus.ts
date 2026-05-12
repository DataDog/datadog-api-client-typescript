/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Status of the validation. Always `ok` when both the API key and the application key are valid.
 */

export type ValidateAPIKeyStatus = typeof OK | UnparsedObject;
export const OK = "ok";
