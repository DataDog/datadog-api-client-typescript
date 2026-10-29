import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleProposalResponseData } from "./SecurityMonitoringRuleProposalResponseData";

/**
 * Response containing a rule proposal.
 */
export class SecurityMonitoringRuleProposalResponse {
  /**
   * Data of the rule proposal.
   */
  "data": SecurityMonitoringRuleProposalResponseData;
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
      type: "SecurityMonitoringRuleProposalResponseData",
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
    return SecurityMonitoringRuleProposalResponse.attributeTypeMap;
  }

  public constructor() {}
}
