import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssetOperatingSystem } from "./AssetOperatingSystem";
import { AssetRisks } from "./AssetRisks";
import { AssetType } from "./AssetType";
import { AssetVersion } from "./AssetVersion";

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
      type: "AssetOperatingSystem",
    },
    risks: {
      baseName: "risks",
      type: "AssetRisks",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AssetType",
      required: true,
    },
    version: {
      baseName: "version",
      type: "AssetVersion",
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
    return AssetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
