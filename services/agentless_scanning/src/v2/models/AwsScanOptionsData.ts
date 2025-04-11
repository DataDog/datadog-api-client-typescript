import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsScanOptionsAttributes } from "./AwsScanOptionsAttributes";
import { AwsScanOptionsType } from "./AwsScanOptionsType";

/**
 * Single AWS Scan Options entry.
 */
export class AwsScanOptionsData {
  /**
   * Attributes for the AWS scan options.
   */
  "attributes"?: AwsScanOptionsAttributes;
  /**
   * The ID of the AWS account.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `aws_scan_options`.
   */
  "type"?: AwsScanOptionsType;
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
      type: "AwsScanOptionsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AwsScanOptionsType",
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
    return AwsScanOptionsData.attributeTypeMap;
  }

  public constructor() {}
}
