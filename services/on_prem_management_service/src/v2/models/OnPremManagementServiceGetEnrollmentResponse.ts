import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceGetEnrollmentResponseData } from "./OnPremManagementServiceGetEnrollmentResponseData";

/**
 * Response for getting an enrollment status.
 */
export class OnPremManagementServiceGetEnrollmentResponse {
  /**
   * Data for the enrollment status.
   */
  "data": OnPremManagementServiceGetEnrollmentResponseData;
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
      type: "OnPremManagementServiceGetEnrollmentResponseData",
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
    return OnPremManagementServiceGetEnrollmentResponse.attributeTypeMap;
  }

  public constructor() {}
}
