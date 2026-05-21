import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagData } from "./TagData";

/**
 * The response for listing tags associated with apps.
 */
export class AppBuilderListTagsResponse {
  /**
   * An array of tags.
   */
  "data"?: Array<TagData>;
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
    data: {
      baseName: "data",
      type: "Array<TagData>",
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
    return AppBuilderListTagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
