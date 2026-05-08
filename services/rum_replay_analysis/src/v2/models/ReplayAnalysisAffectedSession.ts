import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A session affected by a replay analysis issue.
 */
export class ReplayAnalysisAffectedSession {
  /**
   * Unique identifier of the affected session.
   */
  "sessionId": string;
  /**
   * Session start timestamp in milliseconds.
   */
  "sessionStartTimestampMs"?: number;
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
    sessionId: {
      baseName: "session_id",
      type: "string",
      required: true,
    },
    sessionStartTimestampMs: {
      baseName: "session_start_timestamp_ms",
      type: "number",
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
    return ReplayAnalysisAffectedSession.attributeTypeMap;
  }

  public constructor() {}
}
