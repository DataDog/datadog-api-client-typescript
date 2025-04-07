import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Static library vulnerability location.
 */
export class DependencyLocation {
  /**
   * Location column end.
   */
  "columnEnd": number;
  /**
   * Location column start.
   */
  "columnStart": number;
  /**
   * Location file name.
   */
  "fileName": string;
  /**
   * Location line end.
   */
  "lineEnd": number;
  /**
   * Location line start.
   */
  "lineStart": number;
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
    columnEnd: {
      baseName: "column_end",
      type: "number",
      required: true,
      format: "int64",
    },
    columnStart: {
      baseName: "column_start",
      type: "number",
      required: true,
      format: "int64",
    },
    fileName: {
      baseName: "file_name",
      type: "string",
      required: true,
    },
    lineEnd: {
      baseName: "line_end",
      type: "number",
      required: true,
      format: "int64",
    },
    lineStart: {
      baseName: "line_start",
      type: "number",
      required: true,
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DependencyLocation.attributeTypeMap;
  }

  public constructor() {}
}
