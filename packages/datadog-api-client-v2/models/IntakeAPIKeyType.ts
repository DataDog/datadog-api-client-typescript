/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for an intake API key.
 */

export type IntakeAPIKeyType = typeof INTAKE_API_KEY | UnparsedObject;
export const INTAKE_API_KEY = "intake_api_key";
