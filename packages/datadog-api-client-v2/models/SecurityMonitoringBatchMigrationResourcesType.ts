/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of resource for a request on a set of batch migration resources.
 */

export type SecurityMonitoringBatchMigrationResourcesType =
  | typeof BATCH_MIGRATION_RESOURCES
  | UnparsedObject;
export const BATCH_MIGRATION_RESOURCES = "batchMigrationResources";
