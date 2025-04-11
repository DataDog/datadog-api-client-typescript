import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsScanOptionsUpdateData } from "./AwsScanOptionsUpdateData";

/**
 * Request object that includes the scan options to update.
 */
export class AwsScanOptionsUpdateRequest {
  /**
   * Object for the scan options of a single AWS account.
   */
  "data": AwsScanOptionsUpdateData;
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
      type: "AwsScanOptionsUpdateData",
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
    return AwsScanOptionsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
