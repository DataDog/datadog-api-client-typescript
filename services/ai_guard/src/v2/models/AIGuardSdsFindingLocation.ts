import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The location of a sensitive data match within the evaluated request.
 */
export class AIGuardSdsFindingLocation {
  /**
   * The end character index (exclusive) of the sensitive data match.
   */
  "endIndexExclusive": number;
  /**
   * The JSON path to the field containing the sensitive data.
   */
  "path": string;
  /**
   * The start character index of the sensitive data match.
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
