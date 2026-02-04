import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceCreateEnrollmentResponseData } from "./OnPremManagementServiceCreateEnrollmentResponseData";

/**
 * Response for creating an enrollment.
 */
export class OnPremManagementServiceCreateEnrollmentResponse {
  /**
   * Data for the created enrollment.
   */
  "data": OnPremManagementServiceCreateEnrollmentResponseData;
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
      type: "OnPremManagementServiceCreateEnrollmentResponseData",
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
    return OnPremManagementServiceCreateEnrollmentResponse.attributeTypeMap;
  }

  public constructor() {}
}
