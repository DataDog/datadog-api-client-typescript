import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAFailureRequestAttributes } from "./DORAFailureRequestAttributes";

/**
 * The JSON:API data.
 */
export class DORAFailureRequestData {
  /**
   * Attributes to create a DORA failure event.
   */
  "attributes": DORAFailureRequestAttributes;
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
      type: "DORAFailureRequestAttributes",
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
    return DORAFailureRequestData.attributeTypeMap;
  }

  public constructor() {}
}
