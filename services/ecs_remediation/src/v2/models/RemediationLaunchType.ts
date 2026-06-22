import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * ECS launch type.
 */
export type RemediationLaunchType =
  | typeof EC2
  | typeof FARGATE
  | UnparsedObject;
export const EC2 = "EC2";
export const FARGATE = "FARGATE";
