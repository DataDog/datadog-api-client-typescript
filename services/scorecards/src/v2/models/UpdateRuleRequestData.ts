import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleAttributesRequest } from "./RuleAttributesRequest";
import { RuleType } from "./RuleType";

/**
 * Data for the request to update a scorecard rule.
 */
export class UpdateRuleRequestData {
  /**
   * Attributes for creating or updating a rule. Server-managed fields (created_at, modified_at, custom) are excluded.
   */
  "attributes"?: RuleAttributesRequest;
  /**
   * The JSON:API type for scorecard rules.
   */
  "type"?: RuleType;
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
      type: "RuleAttributesRequest",
    },
    type: {
      baseName: "type",
      type: "RuleType",
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
    return UpdateRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
