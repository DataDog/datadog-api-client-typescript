import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleMeetConfigurationReferenceData } from "./GoogleMeetConfigurationReferenceData";

/**
 * A reference to a Google Meet Configuration resource.
 */
export class GoogleMeetConfigurationReference {
  /**
   * The Google Meet configuration relationship data object.
   */
  "data": GoogleMeetConfigurationReferenceData | null;
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
      type: "GoogleMeetConfigurationReferenceData",
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
    return GoogleMeetConfigurationReference.attributeTypeMap;
  }

  public constructor() {}
}
