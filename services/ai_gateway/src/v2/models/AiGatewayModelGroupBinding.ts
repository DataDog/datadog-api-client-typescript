import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelGroupBindingRelation } from "./AiGatewayModelGroupBindingRelation";

/**
 * Initial access binding for an AI Gateway model group.
 */
export class AiGatewayModelGroupBinding {
  /**
   * Principals granted the relation.
   */
  "principals": Array<string>;
  /**
   * Access relation granted on a model group.
   */
  "relation": AiGatewayModelGroupBindingRelation;
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
    principals: {
      baseName: "principals",
      type: "Array<string>",
      required: true,
    },
    relation: {
      baseName: "relation",
      type: "AiGatewayModelGroupBindingRelation",
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
    return AiGatewayModelGroupBinding.attributeTypeMap;
  }

  public constructor() {}
}
