import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The STIX ingestion resource type.
 */
export type STIXIngestResponseType =
  | typeof THREAT_INTEL_STIX_INGEST
  | UnparsedObject;
export const THREAT_INTEL_STIX_INGEST = "threat-intel-stix-ingest";
