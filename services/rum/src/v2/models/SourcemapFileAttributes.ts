import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a JavaScript source map file.
 */
export class SourcemapFileAttributes {
  /**
   * The name of the minified JavaScript file.
   */
  "file": string;
  /**
   * The Base64 VLQ encoded string that maps positions in the minified
   * file to positions in the original source files.
   */
  "mappings": string;
  /**
   * List of character counts for each line in the minified file.
   */
  "minifiedLineLengths": Array<number>;
  /**
   * List of symbol names referenced in the mappings.
   */
  "names": Array<any>;
  /**
   * The root path prepended to source file paths.
   */
  "sourceRoot": string;
  /**
   * List of original source file paths.
   */
  "sources": Array<string>;
  /**
   * List of original source file contents corresponding to the paths in `sources`.
   */
  "sourcesContent": Array<string>;
  /**
   * The version of the source map format (typically 3).
   */
  "version": number;
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
    file: {
      baseName: "file",
      type: "string",
      required: true,
    },
    mappings: {
      baseName: "mappings",
      type: "string",
      required: true,
    },
    minifiedLineLengths: {
      baseName: "minifiedLineLengths",
      type: "Array<number>",
      required: true,
    },
    names: {
      baseName: "names",
      type: "Array<any>",
      required: true,
    },
    sourceRoot: {
      baseName: "sourceRoot",
      type: "string",
      required: true,
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    sourcesContent: {
      baseName: "sourcesContent",
      type: "Array<string>",
      required: true,
    },
    version: {
      baseName: "version",
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
    return SourcemapFileAttributes.attributeTypeMap;
  }

  public constructor() {}
}
