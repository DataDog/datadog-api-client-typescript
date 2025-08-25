/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AssetOperatingSystem } from "./AssetOperatingSystem";
import { AssetRisks } from "./AssetRisks";
import { AssetType } from "./AssetType";
import { AssetVersion } from "./AssetVersion";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The JSON:API attributes of the asset.
*/
export class AssetAttributes {
  /**
   * Asset architecture.
  */
  "arch"?: string;
  /**
   * List of environments where the asset is deployed.
  */
  "environments": Array<string>;
  /**
   * Asset name.
  */
  "name": string;
  /**
   * Asset operating system.
  */
  "operatingSystem"?: AssetOperatingSystem;
  /**
   * Asset risks.
  */
  "risks": AssetRisks;
  /**
   * List of teams that own the asset.
  */
  "teams"?: Array<string>;
  /**
   * The asset type
  */
  "type": AssetType;
  /**
   * Asset version.
  */
  "version"?: AssetVersion;

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
    "arch": {
      "baseName": "arch",
      "type": "string",
    },
    "environments": {
      "baseName": "environments",
      "type": "Array<string>",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "operatingSystem": {
      "baseName": "operating_system",
      "type": "AssetOperatingSystem",
    },
    "risks": {
      "baseName": "risks",
      "type": "AssetRisks",
      "required": true,
    },
    "teams": {
      "baseName": "teams",
      "type": "Array<string>",
    },
    "type": {
      "baseName": "type",
      "type": "AssetType",
      "required": true,
    },
    "version": {
      "baseName": "version",
      "type": "AssetVersion",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return AssetAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









