import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSLogsServicesResponseAttributes } from "./AWSLogsServicesResponseAttributes";
import { AWSLogsServicesResponseDataType } from "./AWSLogsServicesResponseDataType";

/**
 * AWS Logs Services response body
 */
export class AWSLogsServicesResponseData {
  /**
   * AWS Logs Services response body
   */
  "attributes"?: AWSLogsServicesResponseAttributes;
  /**
   * The `AWSLogsServicesResponseData` `id`.
   */
  "id": string;
  /**
   * The `AWSLogsServicesResponseData` `type`.
   */
  "type": AWSLogsServicesResponseDataType;
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
      type: "AWSLogsServicesResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSLogsServicesResponseDataType",
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
    return AWSLogsServicesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
