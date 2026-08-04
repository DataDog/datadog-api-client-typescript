import { UnparsedObject } from "@datadog/datadog-api-client";

import { ElasticCloudCcmInterface } from "./ElasticCloudCcmInterface";
import { ElasticCloudMonitoringInterface } from "./ElasticCloudMonitoringInterface";

/**
 * Elastic Cloud interface (source-type). Exactly one interface variant is set, selected by its `type`.
 */
export type ElasticCloudInterface =
  | ElasticCloudMonitoringInterface
  | ElasticCloudCcmInterface
  | UnparsedObject;
