/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the last successful scan of an asset.
 */
export class ScannedAssetMetadataLastSuccess {
  /**
   * The environment of the last success scan of the asset.
   */
  "env"?: string;
  /**
   * The list of origins of the last success scan of the asset.
   */
  "origin"?: Array<string>;
  /**
   * The timestamp of the last success scan of the asset.
   */
  "timestamp": string;

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
    env: {
      baseName: "env",
      type: "string",
    },
    origin: {
      baseName: "origin",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
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
    return ScannedAssetMetadataLastSuccess.attributeTypeMap;
  }

  public constructor() {}
}
