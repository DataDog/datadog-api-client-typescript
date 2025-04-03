import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomCostsFileMetadataWithContent } from "./CustomCostsFileMetadataWithContent";

/**
 * JSON API format of for a Custom Costs file with content.
 */
export class CustomCostsFileMetadataWithContentHighLevel {
  /**
   * Schema of a cost file's metadata.
   */
  "attributes"?: CustomCostsFileMetadataWithContent;
  /**
   * ID of the Custom Costs metadata.
   */
  "id"?: string;
  /**
   * Type of the Custom Costs file metadata.
   */
  "type"?: string;
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
      type: "CustomCostsFileMetadataWithContent",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CustomCostsFileMetadataWithContentHighLevel.attributeTypeMap;
  }

  public constructor() {}
}
