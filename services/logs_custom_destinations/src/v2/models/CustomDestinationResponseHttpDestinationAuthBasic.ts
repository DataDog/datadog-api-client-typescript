import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseHttpDestinationAuthBasicType } from "./CustomDestinationResponseHttpDestinationAuthBasicType";

/**
 * Basic access authentication.
 */
export class CustomDestinationResponseHttpDestinationAuthBasic {
  /**
   * Type of the basic access authentication.
   */
  "type": CustomDestinationResponseHttpDestinationAuthBasicType;
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
    type: {
      baseName: "type",
      type: "CustomDestinationResponseHttpDestinationAuthBasicType",
      required: true,
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
    return CustomDestinationResponseHttpDestinationAuthBasic.attributeTypeMap;
  }

  public constructor() {}
}
