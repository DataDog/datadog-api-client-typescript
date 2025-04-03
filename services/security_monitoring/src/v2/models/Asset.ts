import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssetAttributes } from "./AssetAttributes";
import { AssetEntityType } from "./AssetEntityType";

/**
 * A single vulnerable asset
 */
export class Asset {
  /**
   * The JSON:API attributes of the asset.
   */
  "attributes": AssetAttributes;
  /**
   * The unique ID for this asset.
   */
  "id": string;
  /**
   * The JSON:API type.
   */
  "type": AssetEntityType;
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
      type: "AssetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AssetEntityType",
      required: true,
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
    return Asset.attributeTypeMap;
  }

  public constructor() {}
}
