import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCloudAuthPersonaMappingAttributesResponse } from "./AWSCloudAuthPersonaMappingAttributesResponse";
import { AWSCloudAuthPersonaMappingType } from "./AWSCloudAuthPersonaMappingType";

/**
 * Data for AWS cloud authentication persona mapping response
 */
export class AWSCloudAuthPersonaMappingDataResponse {
  /**
   * Attributes for AWS cloud authentication persona mapping response
   */
  "attributes": AWSCloudAuthPersonaMappingAttributesResponse;
  /**
   * Unique identifier for the persona mapping
   */
  "id": string;
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
      type: "AWSCloudAuthPersonaMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return AWSCloudAuthPersonaMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
