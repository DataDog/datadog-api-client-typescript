import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsScanOptionsCreateAttributes } from "./AwsScanOptionsCreateAttributes";
import { AwsScanOptionsType } from "./AwsScanOptionsType";

/**
 * Object for the scan options of a single AWS account.
 */
export class AwsScanOptionsCreateData {
  /**
   * Attributes for the AWS scan options to create.
   */
  "attributes": AwsScanOptionsCreateAttributes;
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
      type: "AwsScanOptionsCreateAttributes",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsScanOptionsCreateData.attributeTypeMap;
  }

  public constructor() {}
}
