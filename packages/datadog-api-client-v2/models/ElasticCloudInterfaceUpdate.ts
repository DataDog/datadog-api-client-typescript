/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudCcmInterfaceUpdate } from "./ElasticCloudCcmInterfaceUpdate";
import { ElasticCloudMonitoringInterfaceUpdate } from "./ElasticCloudMonitoringInterfaceUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Partial Elastic Cloud interface for updates. Exactly one interface variant is set, selected by its `type`.
 */

export type ElasticCloudInterfaceUpdate =
  | ElasticCloudMonitoringInterfaceUpdate
  | ElasticCloudCcmInterfaceUpdate
  | UnparsedObject;
