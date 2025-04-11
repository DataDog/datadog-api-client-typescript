import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionPolicyBinding } from "./RestrictionPolicyBinding";

/**
 * Restriction policy attributes.
 */
export class RestrictionPolicyAttributes {
  /**
   * An array of bindings.
   */
  "bindings": Array<RestrictionPolicyBinding>;
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
    bindings: {
      baseName: "bindings",
      type: "Array<RestrictionPolicyBinding>",
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
    return RestrictionPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
