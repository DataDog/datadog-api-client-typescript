import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseDefinition } from "./CustomDestinationResponseDefinition";

/**
 * The custom destination.
 */
export class CustomDestinationResponse {
  /**
   * The definition of a custom destination.
   */
  "data"?: CustomDestinationResponseDefinition;
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
      type: "CustomDestinationResponseDefinition",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationResponse.attributeTypeMap;
  }

  public constructor() {}
}
