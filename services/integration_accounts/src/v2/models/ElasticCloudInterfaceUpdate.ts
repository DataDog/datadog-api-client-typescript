import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudCcmInterfaceUpdate } from "./ElasticCloudCcmInterfaceUpdate";
import { ElasticCloudMonitoringInterfaceUpdate } from "./ElasticCloudMonitoringInterfaceUpdate";

/**
 * Partial Elastic Cloud interface for updates. Exactly one interface variant is set, selected by its `type`.
 */
export type ElasticCloudInterfaceUpdate =
  | ElasticCloudMonitoringInterfaceUpdate
  | ElasticCloudCcmInterfaceUpdate
  | UnparsedObject;
