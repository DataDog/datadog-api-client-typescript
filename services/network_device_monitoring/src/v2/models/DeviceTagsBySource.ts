import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tags associated with a device from a specific source.
 */
export class DeviceTagsBySource {
  /**
   * The source of the tags.
   */
  "source"?: string;
  /**
   * The list of tags for the source.
   */
  "tags"?: Array<string>;
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
    source: {
      baseName: "source",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return DeviceTagsBySource.attributeTypeMap;
  }

  public constructor() {}
}
