import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesTagsToolGenerator } from "./ScaRequestDataAttributesTagsToolGenerator";

/**
 * Tool metadata included in SCA tags.
 */
export class ScaRequestDataAttributesTagsTool {
  /**
   * Metadata about the tool that generated the SCA tags.
   */
  "generator"?: ScaRequestDataAttributesTagsToolGenerator;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    generator: {
      baseName: "generator",
      type: "ScaRequestDataAttributesTagsToolGenerator",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScaRequestDataAttributesTagsTool.attributeTypeMap;
  }

  public constructor() {}
}
