/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Pup bump test resource type.
 */

export type PupBumpTestType = typeof PUP_BUMP_TEST | UnparsedObject;
export const PUP_BUMP_TEST = "pup_bump_test";
