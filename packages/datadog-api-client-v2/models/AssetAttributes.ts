/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AssetAttributesOperatingSystem } from "./AssetAttributesOperatingSystem";
import { AssetAttributesRisks } from "./AssetAttributesRisks";
import { AssetAttributesVersion } from "./AssetAttributesVersion";
import { AssetType } from "./AssetType";

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
  "operatingSystem"?: AssetAttributesOperatingSystem;
  /**
   * Asset risks.
   */
  "risks": AssetAttributesRisks;
  /**
   * The asset type
   */
  "type": AssetType;
  /**
   * Asset version.
   */
  "version"?: AssetAttributesVersion;

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
    arch: {
      baseName: "arch",
      type: "string",
    },
    environments: {
      baseName: "environments",
      type: "Array<string>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    operatingSystem: {
      baseName: "operating_system",
      type: "AssetAttributesOperatingSystem",
    },
    risks: {
      baseName: "risks",
      type: "AssetAttributesRisks",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AssetType",
      required: true,
    },
    version: {
      baseName: "version",
      type: "AssetAttributesVersion",
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
    return AssetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
