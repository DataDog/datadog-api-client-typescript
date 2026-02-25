import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCloudAuthPersonaMappingCreateAttributes } from "./AWSCloudAuthPersonaMappingCreateAttributes";
import { AWSCloudAuthPersonaMappingType } from "./AWSCloudAuthPersonaMappingType";

/**
 * Data for creating an AWS cloud authentication persona mapping
 */
export class AWSCloudAuthPersonaMappingCreateData {
  /**
   * Attributes for creating an AWS cloud authentication persona mapping
   */
  "attributes": AWSCloudAuthPersonaMappingCreateAttributes;
  /**
   * Type identifier for AWS cloud authentication persona mapping
   */
  "type": AWSCloudAuthPersonaMappingType;
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
      type: "AWSCloudAuthPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSCloudAuthPersonaMappingType",
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
    return AWSCloudAuthPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
