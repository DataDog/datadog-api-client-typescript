import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Kind metadata.
 */
export class KindMetadata {
  /**
   * The creation time.
   */
  "createdAt"?: string;
  /**
   * The modification time.
   */
  "modifiedAt"?: string;
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
    createdAt: {
      baseName: "createdAt",
      type: "string",
    },
    modifiedAt: {
      baseName: "modifiedAt",
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
    return KindMetadata.attributeTypeMap;
  }

  public constructor() {}
}
