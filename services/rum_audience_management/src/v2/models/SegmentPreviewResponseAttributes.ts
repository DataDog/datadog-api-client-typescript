import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Members of the previewed segment.
 */
export class SegmentPreviewResponseAttributes {
  /**
   * Rows of the preview, each as a map of column names to values.
   */
  "hits": Array<{ [key: string]: any }>;
  /**
   * Total number of entities in the segment.
   */
  "totalRows": number;
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
    hits: {
      baseName: "hits",
      type: "Array<{ [key: string]: any; }>",
      required: true,
    },
    totalRows: {
      baseName: "total_rows",
      type: "number",
      required: true,
      format: "int64",
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
    return SegmentPreviewResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
