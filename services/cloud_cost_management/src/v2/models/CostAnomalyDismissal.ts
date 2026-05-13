import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Resolution metadata for an anomaly that has been dismissed.
 */
export class CostAnomalyDismissal {
  /**
   * Reason the anomaly was dismissed.
   */
  "cause": string;
  /**
   * Unique identifier of the dismissal record.
   */
  "dismissalId": string;
  /**
   * Optional message explaining the dismissal.
   */
  "message": string;
  /**
   * Timestamp of the last dismissal update in Unix milliseconds.
   */
  "updatedAt": number;
  /**
   * Identifier of the user that last updated the dismissal.
   */
  "updatedBy": string;
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
    cause: {
      baseName: "cause",
      type: "string",
      required: true,
    },
    dismissalId: {
      baseName: "dismissal_id",
      type: "string",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "number",
      required: true,
      format: "int64",
    },
    updatedBy: {
      baseName: "updated_by",
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
    return CostAnomalyDismissal.attributeTypeMap;
  }

  public constructor() {}
}
