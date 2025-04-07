import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of authentication to use when performing the test.
 */
export type SyntheticsBasicAuthNTLMType = typeof NTLM | UnparsedObject;
export const NTLM = "ntlm";
