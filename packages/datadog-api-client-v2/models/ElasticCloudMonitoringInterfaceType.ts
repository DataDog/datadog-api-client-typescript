/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Interface discriminator for the Elastic Cloud monitoring interface.
 */

export type ElasticCloudMonitoringInterfaceType =
  | typeof ELASTIC_CLOUD
  | UnparsedObject;
export const ELASTIC_CLOUD = "elastic-cloud";
