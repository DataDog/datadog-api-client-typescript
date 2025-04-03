import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Asset version.
 */
export class AssetVersion {
  /**
   * Asset first version.
   */
  "first"?: string;
  /**
   * Asset last version.
   */
  "last"?: string;
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
    first: {
      baseName: "first",
      type: "string",
    },
    last: {
      baseName: "last",
      type: "string",
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
    return AssetVersion.attributeTypeMap;
  }

  public constructor() {}
}
