/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The operation to perform on the selected hierarchy.
 * When set to `include`, synchronization covers the
 * referenced teams or organizations.
 */

export type TeamSyncSelectionStateOperation = typeof INCLUDE | UnparsedObject;
export const INCLUDE = "include";
