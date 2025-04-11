import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseDefinition } from "./CustomDestinationResponseDefinition";

/**
 * The available custom destinations.
 */
export class CustomDestinationsResponse {
  /**
   * A list of custom destinations.
   */
  "data"?: Array<CustomDestinationResponseDefinition>;
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
      type: "Array<CustomDestinationResponseDefinition>",
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
    return CustomDestinationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
