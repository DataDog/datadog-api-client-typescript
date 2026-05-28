import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Devices resource type.
 */
export type DeviceDetailsDataType = typeof DEVICES | UnparsedObject;
export const DEVICES = "devices";
