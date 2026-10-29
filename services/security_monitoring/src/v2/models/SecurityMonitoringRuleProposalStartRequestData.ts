import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleProposalStartRequestAttributes } from "./SecurityMonitoringRuleProposalStartRequestAttributes";
import { SecurityMonitoringRuleProposalType } from "./SecurityMonitoringRuleProposalType";

/**
 * Data of the rule proposal to start.
 */
export class SecurityMonitoringRuleProposalStartRequestData {
  /**
   * Attributes of the rule proposal to start.
   */
  "attributes": SecurityMonitoringRuleProposalStartRequestAttributes;
  /**
   * The rule proposal resource type. The value is always `rule_proposals`.
   */
  "type": SecurityMonitoringRuleProposalType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringRuleProposalStartRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleProposalType",
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
    return SecurityMonitoringRuleProposalStartRequestData.attributeTypeMap;
  }

  public constructor() {}
}
