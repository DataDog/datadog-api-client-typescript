import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleProposalStartRequestData } from "./SecurityMonitoringRuleProposalStartRequestData";

/**
 * Request to start a rule proposal.
 */
export class SecurityMonitoringRuleProposalStartRequest {
  /**
   * Data of the rule proposal to start.
   */
  "data": SecurityMonitoringRuleProposalStartRequestData;
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
    data: {
      baseName: "data",
      type: "SecurityMonitoringRuleProposalStartRequestData",
      required: true,
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
    return SecurityMonitoringRuleProposalStartRequest.attributeTypeMap;
  }

  public constructor() {}
}
