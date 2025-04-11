import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionPolicyAttributes } from "./RestrictionPolicyAttributes";
import { RestrictionPolicyType } from "./RestrictionPolicyType";

/**
 * Restriction policy object.
 */
export class RestrictionPolicy {
  /**
   * Restriction policy attributes.
   */
  "attributes": RestrictionPolicyAttributes;
  /**
   * The identifier, always equivalent to the value specified in the `resource_id` path parameter.
   */
  "id": string;
  /**
   * Restriction policy type.
   */
  "type": RestrictionPolicyType;
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
      type: "RestrictionPolicyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RestrictionPolicyType",
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
    return RestrictionPolicy.attributeTypeMap;
  }

  public constructor() {}
}
