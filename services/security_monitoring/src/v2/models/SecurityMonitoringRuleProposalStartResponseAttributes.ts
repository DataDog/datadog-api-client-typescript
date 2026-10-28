import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the started rule proposal.
 */
export class SecurityMonitoringRuleProposalStartResponseAttributes {
  /**
   * The status of the rule proposal, one of `pending`, `in_progress`, `completed`, or
   * `failed`. For a newly started rule proposal, the status is `pending`.
   */
  "status": string;
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
    status: {
      baseName: "status",
      type: "string",
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
    return SecurityMonitoringRuleProposalStartResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
