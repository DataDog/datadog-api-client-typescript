/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Which type of infrastructure entity to visualize in the host map.
 */

export type HostMapWidgetNodeType =
  | typeof HOST
  | typeof CONTAINER
  | typeof POD
  | typeof CLUSTER
  | UnparsedObject;
export const HOST = "host";
export const CONTAINER = "container";
export const POD = "pod";
export const CLUSTER = "cluster";
