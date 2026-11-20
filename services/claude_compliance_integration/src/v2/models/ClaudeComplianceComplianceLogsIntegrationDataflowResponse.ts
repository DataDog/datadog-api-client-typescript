import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";

/**
 * Audit activity logs from the Anthropic Compliance API, such as SSO sign-ins, API key lifecycle events, member and role changes, and Claude chat and file access. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) uses these logs to detect security-sensitive activity. Requires an Anthropic Enterprise plan with the Compliance API enabled in the organization's Data and privacy settings. Without it, this dataflow collects no data. This dataflow is always on and cannot be turned off, so it appears in responses only.
 */
export class ClaudeComplianceComplianceLogsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Always `true`, because this collection cannot be turned off.
   */
  "enabled"?: boolean;
  /**
   * Read-only collection status of a dataflow.
   */
  "status"?: IntegrationAccountDataflowStatus;
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
    status: {
      baseName: "status",
      type: "IntegrationAccountDataflowStatus",
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
    return ClaudeComplianceComplianceLogsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
