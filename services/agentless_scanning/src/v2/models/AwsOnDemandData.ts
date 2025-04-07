import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsOnDemandAttributes } from "./AwsOnDemandAttributes";
import { AwsOnDemandType } from "./AwsOnDemandType";

/**
 * Single AWS on demand task.
 */
export class AwsOnDemandData {
  /**
   * Attributes for the AWS on demand task.
   */
  "attributes"?: AwsOnDemandAttributes;
  /**
   * The UUID of the task.
   */
  "id"?: string;
  /**
   * The type of the on demand task. The value should always be `aws_resource`.
   */
  "type"?: AwsOnDemandType;
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
      type: "AwsOnDemandAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AwsOnDemandType",
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
    return AwsOnDemandData.attributeTypeMap;
  }

  public constructor() {}
}
