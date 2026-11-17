import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Cloud provider for commitment programs.
 */
export type CommitmentsProvider = typeof AWS | typeof AZURE | UnparsedObject;
export const AWS = "aws";
export const AZURE = "azure";
