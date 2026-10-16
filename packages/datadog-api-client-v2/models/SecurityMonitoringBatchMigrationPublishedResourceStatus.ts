/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The outcome of publishing a batch migration resource.
 */

export type SecurityMonitoringBatchMigrationPublishedResourceStatus =
  | typeof PUBLISHED
  | typeof FAILED
  | UnparsedObject;
export const PUBLISHED = "published";
export const FAILED = "failed";
