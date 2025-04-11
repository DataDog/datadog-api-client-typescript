import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionPolicy } from "./RestrictionPolicy";

/**
 * Response containing information about a single restriction policy.
 */
export class RestrictionPolicyResponse {
  /**
   * Restriction policy object.
   */
  "data": RestrictionPolicy;
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
      type: "RestrictionPolicy",
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
    return RestrictionPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
