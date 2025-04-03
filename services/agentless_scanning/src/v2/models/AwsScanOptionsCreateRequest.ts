import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsScanOptionsCreateData } from "./AwsScanOptionsCreateData";

/**
 * Request object that includes the scan options to create.
 */
export class AwsScanOptionsCreateRequest {
  /**
   * Object for the scan options of a single AWS account.
   */
  "data": AwsScanOptionsCreateData;
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
      type: "AwsScanOptionsCreateData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsScanOptionsCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
