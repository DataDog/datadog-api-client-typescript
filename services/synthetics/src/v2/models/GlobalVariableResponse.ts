import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalVariableData } from "./GlobalVariableData";

/**
 * Global variable response.
 */
export class GlobalVariableResponse {
  /**
   * Synthetics global variable data. Wrapper around the global variable object.
   */
  "data"?: GlobalVariableData;
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
      type: "GlobalVariableData",
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
    return GlobalVariableResponse.attributeTypeMap;
  }

  public constructor() {}
}
