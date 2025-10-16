import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScannedAssetMetadataAsset } from "./ScannedAssetMetadataAsset";
import { ScannedAssetMetadataLastSuccess } from "./ScannedAssetMetadataLastSuccess";

/**
 * The attributes of a scanned asset metadata.
 */
export class ScannedAssetMetadataAttributes {
  /**
   * The asset of a scanned asset metadata.
   */
  "asset": ScannedAssetMetadataAsset;
  /**
   * The timestamp when the scan of the asset was performed for the first time.
   */
  "firstSuccessTimestamp": string;
  /**
   * Metadata for the last successful scan of an asset.
   */
  "lastSuccess": ScannedAssetMetadataLastSuccess;
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
    asset: {
      baseName: "asset",
      type: "ScannedAssetMetadataAsset",
      required: true,
    },
    firstSuccessTimestamp: {
      baseName: "first_success_timestamp",
      type: "string",
      required: true,
    },
    lastSuccess: {
      baseName: "last_success",
      type: "ScannedAssetMetadataLastSuccess",
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
    return ScannedAssetMetadataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
