import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagDescription } from "./CostTagDescription";

/**
 * Single Cloud Cost Management tag key description returned by the get-by-key endpoint.
 */
export class CostTagDescriptionResponse {
  /**
   * A Cloud Cost Management tag key description, either cross-cloud or scoped to a single cloud provider.
   */
  "data": CostTagDescription;
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
      type: "CostTagDescription",
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
    return CostTagDescriptionResponse.attributeTypeMap;
  }

  public constructor() {}
}
