/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The STIX ingestion resource type.
 */

export type STIXIngestResponseType =
  | typeof THREAT_INTEL_STIX_INGEST
  | UnparsedObject;
export const THREAT_INTEL_STIX_INGEST = "threat-intel-stix-ingest";
