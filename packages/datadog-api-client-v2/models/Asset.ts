/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AssetAttributes } from "./AssetAttributes";
import { AssetEntityType } from "./AssetEntityType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "{ [key: string]: any; }",
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
