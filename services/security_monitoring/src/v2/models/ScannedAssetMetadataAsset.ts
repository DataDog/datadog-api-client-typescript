import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudAssetType } from "./CloudAssetType";

/**
 * The asset of a scanned asset metadata.
 */
export class ScannedAssetMetadataAsset {
  /**
   * The name of the asset.
   */
  "name": string;
  /**
   * The cloud asset type
   */
  "type": CloudAssetType;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudAssetType",
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
    return ScannedAssetMetadataAsset.attributeTypeMap;
  }

  public constructor() {}
}
