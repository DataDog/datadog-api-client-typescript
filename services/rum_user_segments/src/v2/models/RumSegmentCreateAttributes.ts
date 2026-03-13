import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentDataQuery } from "./RumSegmentDataQuery";

/**
 * Attributes for creating a new segment.
 */
export class RumSegmentCreateAttributes {
  /**
   * Query definition for the segment. Contains one or more query blocks and an optional combination formula.
   */
  "dataQuery": RumSegmentDataQuery;
  /**
   * A description of the segment.
   */
  "description"?: string;
  /**
   * The name of the segment.
   */
  "name": string;
  /**
   * A list of tags for the segment.
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
    dataQuery: {
      baseName: "data_query",
      type: "RumSegmentDataQuery",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return RumSegmentCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
