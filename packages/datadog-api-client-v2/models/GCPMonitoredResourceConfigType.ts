/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The GCP monitored resource type. Only a subset of resource types are supported.
 */

export type GCPMonitoredResourceConfigType =
  | typeof CLOUD_FUNCTION
  | typeof CLOUD_RUN_REVISION
  | typeof GCE_INSTANCE
  | UnparsedObject;
export const CLOUD_FUNCTION = "cloud_function";
export const CLOUD_RUN_REVISION = "cloud_run_revision";
export const GCE_INSTANCE = "gce_instance";
