import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyServiceData } from "./FastlyServiceData";

/**
 * The expected response schema when getting Fastly services.
 */
export class FastlyServicesResponse {
  /**
   * The JSON:API data schema.
   */
  "data"?: Array<FastlyServiceData>;
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
      type: "Array<FastlyServiceData>",
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
    return FastlyServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
