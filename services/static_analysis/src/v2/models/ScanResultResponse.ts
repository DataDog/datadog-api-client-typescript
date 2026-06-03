import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The raw scan result document produced by the SCA processor.
 * The contents reflect the vulnerabilities and metadata produced for the libraries
 * submitted in the original scan request.
 */
export type ScanResultResponse = { [key: string]: any } | UnparsedObject;
