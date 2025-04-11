import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsMobileTestsMobileApplicationReferenceType } from "./SyntheticsMobileTestsMobileApplicationReferenceType";

/**
 * Mobile application for mobile synthetics test.
 */
export class SyntheticsMobileTestsMobileApplication {
  /**
   * Application ID of the mobile application.
   */
  "applicationId": string;
  /**
   * Reference ID of the mobile application.
   */
  "referenceId": string;
  /**
   * Reference type for the mobile application for a mobile synthetics test.
   */
  "referenceType": SyntheticsMobileTestsMobileApplicationReferenceType;
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
    applicationId: {
      baseName: "applicationId",
      type: "string",
      required: true,
    },
    referenceId: {
      baseName: "referenceId",
      type: "string",
      required: true,
    },
    referenceType: {
      baseName: "referenceType",
      type: "SyntheticsMobileTestsMobileApplicationReferenceType",
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
    return SyntheticsMobileTestsMobileApplication.attributeTypeMap;
  }

  public constructor() {}
}
