/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of Entity V3 Queue Kind object.
 */

export type EntityV3QueueKind = typeof QUEUE | UnparsedObject;
export const QUEUE = "queue";
