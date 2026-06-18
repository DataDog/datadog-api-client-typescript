import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifIntakeMappingAttributes } from "./AwsWifIntakeMappingAttributes";
import { AwsWifIntakeMappingType } from "./AwsWifIntakeMappingType";

/**
 * Data for creating an AWS WIF intake mapping.
 */
export class AwsWifIntakeMappingCreateData {
  /**
   * Attributes of an AWS WIF intake mapping.
   */
  "attributes": AwsWifIntakeMappingAttributes;
  /**
   * Type identifier for an AWS WIF intake mapping.
   */
  "type": AwsWifIntakeMappingType;
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
      type: "AwsWifIntakeMappingAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsWifIntakeMappingType",
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
    return AwsWifIntakeMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
