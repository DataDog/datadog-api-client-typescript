import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifPersonaMappingAttributes } from "./AwsWifPersonaMappingAttributes";
import { AwsWifPersonaMappingType } from "./AwsWifPersonaMappingType";

/**
 * An AWS WIF persona mapping resource.
 */
export class AwsWifPersonaMappingData {
  /**
   * Attributes of an AWS WIF persona mapping.
   */
  "attributes": AwsWifPersonaMappingAttributes;
  /**
   * The UUID of the persona mapping.
   */
  "id": string;
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
      type: "AwsWifPersonaMappingAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return AwsWifPersonaMappingData.attributeTypeMap;
  }

  public constructor() {}
}
