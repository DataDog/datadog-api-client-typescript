import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudLogsIntegrationDataflowSettingsRequest } from "./NebiusCloudLogsIntegrationDataflowSettingsRequest";

/**
 * Logs from your Nebius tenant: Kubernetes control plane and audit logs, tenant-level audit events, compute serial console logs, cloud apps and AI inference logs, PostgreSQL logs, and MLflow logs, collected from the services named in `settings.enabled_services`. `enabled_services` is the sole source of truth for what is collected; `enabled` set to `false` stops log collection, while `true` on its own changes nothing. Defaults to no services.
 */
export class NebiusCloudLogsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects logs. Defaults to `false`. Set to `false` to stop log collection; sending `true` on its own changes nothing, because `settings.enabled_services` is the sole source of truth.
   */
  "enabled"?: boolean;
  /**
   * Settings of the logs dataflow. Only the fields provided are changed.
   */
  "settings"?: NebiusCloudLogsIntegrationDataflowSettingsRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "NebiusCloudLogsIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudLogsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
