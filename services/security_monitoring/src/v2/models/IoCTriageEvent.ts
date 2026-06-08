import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single entry in an indicator's triage history timeline.
 */
export class IoCTriageEvent {
  /**
   * Triage state set by this action: not_reviewed or reviewed.
   */
  "triageState"?: string;
  /**
   * Timestamp when this triage action occurred.
   */
  "triagedAt"?: Date;
  /**
   * UUID of the user who performed this triage action.
   */
  "triagedBy"?: string;
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
    triageState: {
      baseName: "triage_state",
      type: "string",
    },
    triagedAt: {
      baseName: "triaged_at",
      type: "Date",
      format: "date-time",
    },
    triagedBy: {
      baseName: "triaged_by",
      type: "string",
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
    return IoCTriageEvent.attributeTypeMap;
  }

  public constructor() {}
}
