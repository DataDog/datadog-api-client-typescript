import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceGetEnrollmentResponseAttributes } from "./OnPremManagementServiceGetEnrollmentResponseAttributes";
import { OnPremManagementServiceGetEnrollmentResponseType } from "./OnPremManagementServiceGetEnrollmentResponseType";

/**
 * Data for the enrollment status.
 */
export class OnPremManagementServiceGetEnrollmentResponseData {
  /**
   * Attributes for the enrollment status.
   */
  "attributes": OnPremManagementServiceGetEnrollmentResponseAttributes;
  /**
   * The token hash identifier.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be getEnrollmentResponse.
   */
  "type": OnPremManagementServiceGetEnrollmentResponseType;
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
    attributes: {
      baseName: "attributes",
      type: "OnPremManagementServiceGetEnrollmentResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnPremManagementServiceGetEnrollmentResponseType",
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
    return OnPremManagementServiceGetEnrollmentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
