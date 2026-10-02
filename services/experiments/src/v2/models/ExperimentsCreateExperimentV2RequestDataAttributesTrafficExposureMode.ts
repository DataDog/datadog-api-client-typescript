import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether exposure uses a fixed fraction or a sequence of steps.
 */
export type ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureMode =
  typeof STATIC | typeof STEPS | UnparsedObject;
export const STATIC = "STATIC";
export const STEPS = "STEPS";
