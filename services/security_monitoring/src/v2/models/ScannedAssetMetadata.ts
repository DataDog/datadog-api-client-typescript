import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScannedAssetMetadataAttributes } from "./ScannedAssetMetadataAttributes";

/**
 * The metadata of a scanned asset.
 */
export class ScannedAssetMetadata {
  /**
   * The attributes of a scanned asset metadata.
   */
  "attributes": ScannedAssetMetadataAttributes;
  /**
   * The ID of the scanned asset metadata.
   */
  "id": string;
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
      type: "ScannedAssetMetadataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ScannedAssetMetadata.attributeTypeMap;
  }

  public constructor() {}
}
