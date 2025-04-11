import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsScanOptionsType } from "./AwsScanOptionsType";
import { AwsScanOptionsUpdateAttributes } from "./AwsScanOptionsUpdateAttributes";

/**
 * Object for the scan options of a single AWS account.
 */
export class AwsScanOptionsUpdateData {
  /**
   * Attributes for the AWS scan options to update.
   */
  "attributes": AwsScanOptionsUpdateAttributes;
  /**
   * The ID of the AWS account.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `aws_scan_options`.
   */
  "type": AwsScanOptionsType;
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
      type: "AwsScanOptionsUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsScanOptionsType",
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
    return AwsScanOptionsUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
