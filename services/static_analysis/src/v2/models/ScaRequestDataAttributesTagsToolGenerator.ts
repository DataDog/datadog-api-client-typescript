import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about the tool that generated the SCA tags.
 */
export class ScaRequestDataAttributesTagsToolGenerator {
  /**
   * The name of the tag generator.
   */
  "name"?: string;
  /**
   * The version of the tag generator.
   */
  "version"?: string;
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
    version: {
      baseName: "version",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScaRequestDataAttributesTagsToolGenerator.attributeTypeMap;
  }

  public constructor() {}
}
