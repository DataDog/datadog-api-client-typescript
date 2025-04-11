import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The split graph list contains a graph for each value of the split dimension.
 */
export class SplitVectorEntryItem {
  /**
   * The tag key.
   */
  "tagKey": string;
  /**
   * The tag values.
   */
  "tagValues": Array<string>;
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
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    tagValues: {
      baseName: "tag_values",
      type: "Array<string>",
      required: true,
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
    return SplitVectorEntryItem.attributeTypeMap;
  }

  public constructor() {}
}
