/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The subtype of the Synthetic multistep API test step, currently only supporting `http`.
 */

export type SyntheticsAPIStepSubtype =
  | typeof HTTP
  | typeof GRPC
  | UnparsedObject;
export const HTTP = "http";
export const GRPC = "grpc";
