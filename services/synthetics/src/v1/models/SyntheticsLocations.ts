import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsLocation } from "./SyntheticsLocation";

/**
 * List of Synthetic locations.
 */
export class SyntheticsLocations {
  /**
   * List of Synthetic locations.
   */
  "locations"?: Array<SyntheticsLocation>;
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
    locations: {
      baseName: "locations",
      type: "Array<SyntheticsLocation>",
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
    return SyntheticsLocations.attributeTypeMap;
  }

  public constructor() {}
}
