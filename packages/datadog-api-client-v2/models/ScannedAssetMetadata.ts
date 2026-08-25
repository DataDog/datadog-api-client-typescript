/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScannedAssetMetadataAttributes } from "./ScannedAssetMetadataAttributes";
import { ScannedAssetMetadataType } from "./ScannedAssetMetadataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * The JSON:API type.
   */
  "type": ScannedAssetMetadataType;

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
    type: {
      baseName: "type",
      type: "ScannedAssetMetadataType",
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
