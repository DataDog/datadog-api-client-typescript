import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSLogsServicesResponseData } from "./AWSLogsServicesResponseData";

/**
 * AWS Logs Services response body
 */
export class AWSLogsServicesResponse {
  /**
   * AWS Logs Services response body
   */
  "data": AWSLogsServicesResponseData;
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
      type: "AWSLogsServicesResponseData",
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
    return AWSLogsServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
