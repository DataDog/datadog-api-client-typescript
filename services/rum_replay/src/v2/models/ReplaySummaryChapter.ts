import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A chapter within a RUM replay summary, representing a distinct segment of user activity.
 */
export class ReplaySummaryChapter {
  /**
   * End time of the chapter in milliseconds.
   */
  "endMs": number;
  /**
   * Start time of the chapter in milliseconds.
   */
  "startMs": number;
  /**
   * Description of user activity during this chapter.
   */
  "text": string;
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
    endMs: {
      baseName: "end_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    startMs: {
      baseName: "start_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    text: {
      baseName: "text",
      type: "string",
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
    return ReplaySummaryChapter.attributeTypeMap;
  }

  public constructor() {}
}
