import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleRevision } from "./CustomRuleRevision";

/**
 * Response containing a single custom rule revision.
 */
export class CustomRuleRevisionResponse {
  /**
   * A specific revision of a custom static analysis rule.
   */
  "data": CustomRuleRevision;
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
      type: "CustomRuleRevision",
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
    return CustomRuleRevisionResponse.attributeTypeMap;
  }

  public constructor() {}
}
