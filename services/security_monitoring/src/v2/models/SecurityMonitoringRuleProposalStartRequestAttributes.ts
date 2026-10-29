import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleProposalInputType } from "./SecurityMonitoringRuleProposalInputType";

/**
 * Attributes of the rule proposal to start.
 */
export class SecurityMonitoringRuleProposalStartRequestAttributes {
  /**
   * The natural-language description or rule to generate the proposed rule from, in the
   * format given by `inputType`.
   */
  "input": string;
  /**
   * The type of input to generate the proposed rule from: `natural_language` for a
   * plain-English description of the behavior to detect, `spl` for a Splunk SPL search or
   * saved search definition, or `kql` for a Microsoft KQL query. SPL inputs must be
   * self-contained, with search macros expanded.
   */
  "inputType": SecurityMonitoringRuleProposalInputType;
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
    input: {
      baseName: "input",
      type: "string",
      required: true,
    },
    inputType: {
      baseName: "inputType",
      type: "SecurityMonitoringRuleProposalInputType",
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
    return SecurityMonitoringRuleProposalStartRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
