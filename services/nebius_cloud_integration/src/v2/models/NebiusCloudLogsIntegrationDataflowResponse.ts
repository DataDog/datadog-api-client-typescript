import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudLogsIntegrationDataflowSettingsResponse } from "./NebiusCloudLogsIntegrationDataflowSettingsResponse";

/**
 * Logs from your Nebius tenant: Kubernetes control plane and audit logs, tenant-level audit events, compute serial console logs, cloud apps and AI inference logs, PostgreSQL logs, and MLflow logs, collected from the services named in `settings.enabled_services`.
 */
export class NebiusCloudLogsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects logs. Absent when no service is enabled.
   */
  "enabled"?: boolean;
  /**
   * Settings of the logs dataflow.
   */
  "settings"?: NebiusCloudLogsIntegrationDataflowSettingsResponse;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "NebiusCloudLogsIntegrationDataflowSettingsResponse",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudLogsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
