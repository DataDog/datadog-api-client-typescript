import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a created or updated triage state.
 */
export class IoCTriageWriteResponseAttributes {
  /**
   * Timestamp when the triage record was created.
   */
  "createdAt"?: Date;
  /**
   * The indicator value that was triaged.
   */
  "indicator"?: string;
  /**
   * The triage state that was set: not_reviewed or reviewed.
   */
  "triageState"?: string;
  /**
   * Timestamp when the triage state was set.
   */
  "triagedAt"?: Date;
  /**
   * UUID of the user who set the triage state.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    indicator: {
      baseName: "indicator",
      type: "string",
    },
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
    return IoCTriageWriteResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
