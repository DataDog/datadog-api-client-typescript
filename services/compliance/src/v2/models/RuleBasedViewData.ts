import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleBasedViewAttributes } from "./RuleBasedViewAttributes";
import { RuleBasedViewType } from "./RuleBasedViewType";

/**
 * Data envelope for the rule-based view response.
 */
export class RuleBasedViewData {
  /**
   * Attributes of the rule-based view.
   */
  "attributes": RuleBasedViewAttributes;
  /**
   * Unique identifier of the rule-based view document.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `rule_based_view`.
   */
  "type": RuleBasedViewType;
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
      type: "RuleBasedViewAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RuleBasedViewType",
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
    return RuleBasedViewData.attributeTypeMap;
  }

  public constructor() {}
}
