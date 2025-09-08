import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ZoomConfigurationReferenceData } from "./ZoomConfigurationReferenceData";

/**
 * A reference to a Zoom configuration resource.
 */
export class ZoomConfigurationReference {
  /**
   * The Zoom configuration relationship data object.
   */
  "data": ZoomConfigurationReferenceData | null;
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
      type: "ZoomConfigurationReferenceData",
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
    return ZoomConfigurationReference.attributeTypeMap;
  }

  public constructor() {}
}
