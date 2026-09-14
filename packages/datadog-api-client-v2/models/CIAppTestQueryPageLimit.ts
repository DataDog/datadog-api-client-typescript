/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Maximum number of events in the response, supplied as an integer or a string containing decimal digits.
 */

export type CIAppTestQueryPageLimit = number | string | UnparsedObject;
