import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCloudAuthIntakeMappingAttributesResponse } from "./AWSCloudAuthIntakeMappingAttributesResponse";
import { AWSCloudAuthIntakeMappingType } from "./AWSCloudAuthIntakeMappingType";

/**
 * Data for AWS cloud authentication intake mapping response.
 */
export class AWSCloudAuthIntakeMappingDataResponse {
  /**
   * Attributes for AWS cloud authentication intake mapping response.
   */
  "attributes": AWSCloudAuthIntakeMappingAttributesResponse;
  /**
   * Unique identifier for the intake mapping.
   */
  "id": string;
  /**
   * Type identifier for AWS cloud authentication intake mapping.
   */
  "type": AWSCloudAuthIntakeMappingType;
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
      type: "AWSCloudAuthIntakeMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSCloudAuthIntakeMappingType",
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
    return AWSCloudAuthIntakeMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
