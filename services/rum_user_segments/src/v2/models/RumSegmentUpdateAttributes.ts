import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentDataQuery } from "./RumSegmentDataQuery";

/**
 * Attributes for updating a segment. All fields are optional.
 */
export class RumSegmentUpdateAttributes {
  /**
   * Query definition for the segment. Contains one or more query blocks and an optional combination formula.
   */
  "dataQuery"?: RumSegmentDataQuery;
  /**
   * The updated description of the segment.
   */
  "description"?: string;
  /**
   * The updated name of the segment.
   */
  "name"?: string;
  /**
   * The updated list of tags for the segment.
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
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return RumSegmentUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
