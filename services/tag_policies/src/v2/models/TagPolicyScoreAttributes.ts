import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a tag policy compliance score.
 */
export class TagPolicyScoreAttributes {
  /**
   * The compliance score for the policy over the requested time window, as a percentage
   * between 0 and 100. `null` indicates that no relevant telemetry was found.
   */
  "score": number | null;
  /**
   * End of the time window the score was computed over, as a Unix timestamp in milliseconds.
   */
  "tsEnd": number;
  /**
   * Start of the time window the score was computed over, as a Unix timestamp in milliseconds.
   */
  "tsStart": number;
  /**
   * The version of the tag policy that the score was computed against.
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
    score: {
      baseName: "score",
      type: "number",
      required: true,
      format: "double",
    },
    tsEnd: {
      baseName: "ts_end",
      type: "number",
      required: true,
      format: "int64",
    },
    tsStart: {
      baseName: "ts_start",
      type: "number",
      required: true,
      format: "int64",
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
    return TagPolicyScoreAttributes.attributeTypeMap;
  }

  public constructor() {}
}
