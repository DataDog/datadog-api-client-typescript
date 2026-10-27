import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata of the Archive Searches response.
 */
export class ArchiveSearchListResponseMeta {
  /**
   * Whether more Archive Searches exist beyond the ones returned.
   */
  "truncated"?: boolean;
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
    truncated: {
      baseName: "truncated",
      type: "boolean",
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
    return ArchiveSearchListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
