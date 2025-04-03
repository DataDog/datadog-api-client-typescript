import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The SBOM component type
 */
export type SBOMComponentType =
  | typeof APPLICATION
  | typeof CONTAINER
  | typeof DATA
  | typeof DEVICE
  | typeof DEVICE_DRIVER
  | typeof FILE
  | typeof FIRMWARE
  | typeof FRAMEWORK
  | typeof LIBRARY
  | typeof MACHINE_LEARNING_MODEL
  | typeof OPERATING_SYSTEM
  | typeof PLATFORM
  | UnparsedObject;
export const APPLICATION = "application";
export const CONTAINER = "container";
export const DATA = "data";
export const DEVICE = "device";
export const DEVICE_DRIVER = "device-driver";
export const FILE = "file";
export const FIRMWARE = "firmware";
export const FRAMEWORK = "framework";
export const LIBRARY = "library";
export const MACHINE_LEARNING_MODEL = "machine-learning-model";
export const OPERATING_SYSTEM = "operating-system";
export const PLATFORM = "platform";
