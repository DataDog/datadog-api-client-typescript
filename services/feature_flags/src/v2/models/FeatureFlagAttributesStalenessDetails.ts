import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Details about the feature flag's staleness status.
 */
export class FeatureFlagAttributesStalenessDetails {
  /**
   * Code references associated with the feature flag.
   */
  "codeReferences"?: Array<{ [key: string]: any }>;
  /**
   * The ID of the user who dismissed the staleness notification.
   */
  "dismissedBy"?: string;
  /**
   * The unique identifier of the staleness details record.
   */
  "id"?: string;
  /**
   * Recommended actions to address the feature flag's staleness.
   */
  "recommendedActions"?: Array<{ [key: string]: any }>;
  /**
   * The timestamp until which staleness checks are skipped.
   */
  "skipStateCheckUntil"?: Date;
  /**
   * The reason the feature flag is considered stale.
   */
  "staleReason"?: string;
  /**
   * The staleness status of the feature flag.
   */
  "stalenessStatus"?: string;
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
    codeReferences: {
      baseName: "code_references",
      type: "Array<{ [key: string]: any; }>",
    },
    dismissedBy: {
      baseName: "dismissed_by",
      type: "string",
      format: "uuid",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    recommendedActions: {
      baseName: "recommended_actions",
      type: "Array<{ [key: string]: any; }>",
    },
    skipStateCheckUntil: {
      baseName: "skip_state_check_until",
      type: "Date",
      format: "date-time",
    },
    staleReason: {
      baseName: "stale_reason",
      type: "string",
    },
    stalenessStatus: {
      baseName: "staleness_status",
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
    return FeatureFlagAttributesStalenessDetails.attributeTypeMap;
  }

  public constructor() {}
}
