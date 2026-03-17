import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceEnrollmentAttributes } from "./OnPremManagementServiceEnrollmentAttributes";
import { OnPremManagementServiceEnrollmentType } from "./OnPremManagementServiceEnrollmentType";

/**
 * Data for creating an enrollment.
 */
export class OnPremManagementServiceEnrollmentDataRequest {
  /**
   * Attributes for creating an enrollment.
   */
  "attributes": OnPremManagementServiceEnrollmentAttributes;
  /**
   * The type of the resource. The value should always be enrollment.
   */
  "type": OnPremManagementServiceEnrollmentType;
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
      type: "OnPremManagementServiceEnrollmentAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnPremManagementServiceEnrollmentType",
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
    return OnPremManagementServiceEnrollmentDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
