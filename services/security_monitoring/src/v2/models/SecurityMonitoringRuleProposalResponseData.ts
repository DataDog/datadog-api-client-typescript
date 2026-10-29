import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleProposalResponseAttributes } from "./SecurityMonitoringRuleProposalResponseAttributes";
import { SecurityMonitoringRuleProposalType } from "./SecurityMonitoringRuleProposalType";

/**
 * Data of the rule proposal.
 */
export class SecurityMonitoringRuleProposalResponseData {
  /**
   * Attributes of the rule proposal.
   */
  "attributes": SecurityMonitoringRuleProposalResponseAttributes;
  /**
   * The ID of the rule proposal.
   */
  "id": string;
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
      type: "SecurityMonitoringRuleProposalResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return SecurityMonitoringRuleProposalResponseData.attributeTypeMap;
  }

  public constructor() {}
}
