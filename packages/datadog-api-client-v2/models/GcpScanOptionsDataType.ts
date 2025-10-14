/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * GCP scan options resource type.
 */

export type GcpScanOptionsDataType = typeof GCP_SCAN_OPTIONS | UnparsedObject;
export const GCP_SCAN_OPTIONS = "gcp_scan_options";
