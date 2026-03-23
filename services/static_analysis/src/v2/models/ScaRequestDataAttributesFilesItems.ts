import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A file entry in the repository associated with a dependency manifest.
 */
export class ScaRequestDataAttributesFilesItems {
  /**
   * The name or path of the file within the repository.
   */
  "name"?: string;
  /**
   * The Package URL (PURL) associated with the dependency declared in this file.
   */
  "purl"?: string;
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
    },
    purl: {
      baseName: "purl",
      type: "string",
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
    return ScaRequestDataAttributesFilesItems.attributeTypeMap;
  }

  public constructor() {}
}
