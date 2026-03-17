import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3GenericEncodingJsonType } from "./ObservabilityPipelineAmazonS3GenericEncodingJsonType";

/**
 * JSON encoding.
 */
export class ObservabilityPipelineAmazonS3GenericEncodingJson {
  /**
   * The encoding type. Always `json`.
   */
  "type": ObservabilityPipelineAmazonS3GenericEncodingJsonType;
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonS3GenericEncodingJsonType",
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
    return ObservabilityPipelineAmazonS3GenericEncodingJson.attributeTypeMap;
  }

  public constructor() {}
}
