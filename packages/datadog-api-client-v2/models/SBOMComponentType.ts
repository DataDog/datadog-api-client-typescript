/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
