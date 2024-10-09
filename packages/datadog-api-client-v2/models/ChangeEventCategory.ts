/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Event category to identify the type of event. Currently only `change` value is supported.
 */

export type ChangeEventCategory = typeof CHANGE | UnparsedObject;
export const CHANGE = "change";
