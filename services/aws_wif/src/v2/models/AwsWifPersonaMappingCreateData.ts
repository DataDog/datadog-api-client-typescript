import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifPersonaMappingCreateAttributes } from "./AwsWifPersonaMappingCreateAttributes";
import { AwsWifPersonaMappingType } from "./AwsWifPersonaMappingType";

/**
 * Data for creating an AWS WIF persona mapping.
 */
export class AwsWifPersonaMappingCreateData {
  /**
   * Attributes for creating an AWS WIF persona mapping.
   */
  "attributes": AwsWifPersonaMappingCreateAttributes;
  /**
   * Type identifier for an AWS WIF persona mapping.
   */
  "type": AwsWifPersonaMappingType;
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
      type: "AwsWifPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsWifPersonaMappingType",
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
    return AwsWifPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
