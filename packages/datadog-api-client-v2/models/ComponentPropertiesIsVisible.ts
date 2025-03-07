/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the UI component is visible. If this is a string, it must be a valid JavaScript expression that evaluates to a boolean.
 */

export type ComponentPropertiesIsVisible = boolean | string | UnparsedObject;
