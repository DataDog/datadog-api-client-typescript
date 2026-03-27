import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleAttributesRequest } from "./RuleAttributesRequest";
import { RuleType } from "./RuleType";

/**
 * Scorecard create rule request data.
 */
export class CreateRuleRequestData {
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
    return CreateRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
