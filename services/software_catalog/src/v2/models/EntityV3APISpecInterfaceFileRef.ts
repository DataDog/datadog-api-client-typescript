import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `EntityV3APISpecInterfaceFileRef` object.
 */
export class EntityV3APISpecInterfaceFileRef {
  /**
   * The reference to the API definition file.
   */
  "fileRef"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fileRef: {
      baseName: "fileRef",
      type: "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3APISpecInterfaceFileRef.attributeTypeMap;
  }

  public constructor() {}
}
