import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentDataQuery } from "./SegmentDataQuery";

/**
 * Attributes to update on a segment. Fields that are not set are left unchanged.
 */
export class SegmentUpdateAttributes {
  /**
   * Defines who belongs to the segment. It contains one or more blocks, up to 20 in total.
   * Use `combination` to combine named blocks with a boolean formula such as `A AND NOT B`.
   */
  "dataQuery"?: SegmentDataQuery;
  /**
   * Description of the segment.
   */
  "description"?: string;
  /**
   * Name of the segment. It must be unique in the organization.
   */
  "name"?: string;
  /**
   * Tags of the segment. Replaces the stored tags.
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
      type: "SegmentDataQuery",
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
    return SegmentUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
