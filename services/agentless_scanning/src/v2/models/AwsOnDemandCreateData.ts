import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsOnDemandCreateAttributes } from "./AwsOnDemandCreateAttributes";
import { AwsOnDemandType } from "./AwsOnDemandType";

/**
 * Object for a single AWS on demand task.
 */
export class AwsOnDemandCreateData {
  /**
   * Attributes for the AWS on demand task.
   */
  "attributes": AwsOnDemandCreateAttributes;
  /**
   * The type of the on demand task. The value should always be `aws_resource`.
   */
  "type": AwsOnDemandType;
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
      type: "AwsOnDemandCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsOnDemandType",
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
    return AwsOnDemandCreateData.attributeTypeMap;
  }

  public constructor() {}
}
