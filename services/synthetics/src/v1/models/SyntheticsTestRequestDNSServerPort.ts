import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * DNS server port to use for DNS tests.
 */
export type SyntheticsTestRequestDNSServerPort =
  | number
  | string
  | UnparsedObject;
