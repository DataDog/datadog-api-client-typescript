import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDowntimeDataRequest } from "./SyntheticsDowntimeDataRequest";

/**
 * Request body for creating or updating a Synthetics downtime.
 */
export class SyntheticsDowntimeRequest {
  /**
   * The data object for a Synthetics downtime create or update request.
   */
  "data": SyntheticsDowntimeDataRequest;
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
      type: "SyntheticsDowntimeDataRequest",
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
    return SyntheticsDowntimeRequest.attributeTypeMap;
  }

  public constructor() {}
}
