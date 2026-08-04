/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudCcmInterface } from "./ElasticCloudCcmInterface";
import { ElasticCloudMonitoringInterface } from "./ElasticCloudMonitoringInterface";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Elastic Cloud interface (source-type). Exactly one interface variant is set, selected by its `type`.
 */

export type ElasticCloudInterface =
  | ElasticCloudMonitoringInterface
  | ElasticCloudCcmInterface
  | UnparsedObject;
