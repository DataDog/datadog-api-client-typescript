import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceComplianceLogsIntegrationDataflowResponse } from "./ClaudeComplianceComplianceLogsIntegrationDataflowResponse";

/**
 * Data Datadog collects from Claude Compliance, keyed by dataflow ID.
 */
export class ClaudeComplianceIntegrationDataflowsResponse {
  /**
   * Audit activity logs from the Anthropic Compliance API, such as SSO sign-ins, API key lifecycle events, member and role changes, and Claude chat and file access. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) uses these logs to detect security-sensitive activity. Requires an Anthropic Enterprise plan with the Compliance API enabled in the organization's Data and privacy settings. Without it, this dataflow collects no data. This dataflow is always on and cannot be turned off, so it appears in responses only.
   */
  "anthropicComplianceLogs"?: ClaudeComplianceComplianceLogsIntegrationDataflowResponse;
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
    anthropicComplianceLogs: {
      baseName: "anthropic-compliance-logs",
      type: "ClaudeComplianceComplianceLogsIntegrationDataflowResponse",
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
    return ClaudeComplianceIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
