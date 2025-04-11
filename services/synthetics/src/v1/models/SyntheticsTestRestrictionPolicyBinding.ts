import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestRestrictionPolicyBindingRelation } from "./SyntheticsTestRestrictionPolicyBindingRelation";

/**
 * Objects describing the binding used for a mobile test.
 */
export class SyntheticsTestRestrictionPolicyBinding {
  /**
   * List of principals for a mobile test binding.
   */
  "principals"?: Array<string>;
  /**
   * The type of relation for the binding.
   */
  "relation"?: SyntheticsTestRestrictionPolicyBindingRelation;
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
    },
    relation: {
      baseName: "relation",
      type: "SyntheticsTestRestrictionPolicyBindingRelation",
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
    return SyntheticsTestRestrictionPolicyBinding.attributeTypeMap;
  }

  public constructor() {}
}
