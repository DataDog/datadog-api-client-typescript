import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceGetEnrollmentResponseAttributesStatus } from "./OnPremManagementServiceGetEnrollmentResponseAttributesStatus";

/**
 * Attributes for the enrollment status.
 */
export class OnPremManagementServiceGetEnrollmentResponseAttributes {
  /**
   * The reason for enrollment failure, if applicable.
   */
  "failureReason": string;
  /**
   * The runner identifier, if enrollment was successful.
   */
  "runnerId": string;
  /**
   * The status of the enrollment.
   */
  "status": OnPremManagementServiceGetEnrollmentResponseAttributesStatus;
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
    failureReason: {
      baseName: "failure_reason",
      type: "string",
      required: true,
    },
    runnerId: {
      baseName: "runner_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "OnPremManagementServiceGetEnrollmentResponseAttributesStatus",
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
    return OnPremManagementServiceGetEnrollmentResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
