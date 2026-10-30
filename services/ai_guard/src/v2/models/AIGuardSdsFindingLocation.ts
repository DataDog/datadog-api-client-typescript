import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The location of a sensitive data match within the request.
 */
export class AIGuardSdsFindingLocation {
  /**
   * The exclusive end index of the match within the located content.
   */
  "endIndexExclusive": number;
  /**
   * The path of the match relative to the request attributes.
   */
  "path": string;
  /**
   * The start index of the match within the located content.
   */
  "startIndex": number;
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
    endIndexExclusive: {
      baseName: "end_index_exclusive",
      type: "number",
      required: true,
      format: "int64",
    },
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    startIndex: {
      baseName: "start_index",
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
    return AIGuardSdsFindingLocation.attributeTypeMap;
  }

  public constructor() {}
}
