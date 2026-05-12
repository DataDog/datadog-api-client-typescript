import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagDescription } from "./CostTagDescription";

/**
 * List of Cloud Cost Management tag key descriptions for the organization, optionally filtered to a single cloud provider.
 */
export class CostTagDescriptionsResponse {
  /**
   * List of tag key descriptions.
   */
  "data": Array<CostTagDescription>;
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
      type: "Array<CostTagDescription>",
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
    return CostTagDescriptionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
