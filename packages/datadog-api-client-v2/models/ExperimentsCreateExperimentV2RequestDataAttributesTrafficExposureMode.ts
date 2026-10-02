/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether exposure uses a fixed fraction or a sequence of steps.
 */

export type ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureMode =
  typeof STATIC | typeof STEPS | UnparsedObject;
export const STATIC = "STATIC";
export const STEPS = "STEPS";
