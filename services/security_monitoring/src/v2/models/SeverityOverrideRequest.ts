import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityOverrideRequestData } from "./SeverityOverrideRequestData";

/**
 * Request to set or clear the manual severity override of security findings.
 */
export class SeverityOverrideRequest {
  /**
   * Data of the severity override request.
   */
  "data": SeverityOverrideRequestData;
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
      type: "SeverityOverrideRequestData",
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
    return SeverityOverrideRequest.attributeTypeMap;
  }

  public constructor() {}
}
