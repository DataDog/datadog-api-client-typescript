import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Trigger data
 */
export class CaseNotificationRuleTriggerData {
  /**
   * Change type (added, removed, changed)
   */
  "changeType"?: string;
  /**
   * Field name for attribute value changed trigger
   */
  "field"?: string;
  /**
   * Status ID to transition from
   */
  "fromStatus"?: string;
  /**
   * Status name to transition from
   */
  "fromStatusName"?: string;
  /**
   * Status ID to transition to
   */
  "toStatus"?: string;
  /**
   * Status name to transition to
   */
  "toStatusName"?: string;
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
    changeType: {
      baseName: "change_type",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "string",
    },
    fromStatus: {
      baseName: "from_status",
      type: "string",
    },
    fromStatusName: {
      baseName: "from_status_name",
      type: "string",
    },
    toStatus: {
      baseName: "to_status",
      type: "string",
    },
    toStatusName: {
      baseName: "to_status_name",
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
    return CaseNotificationRuleTriggerData.attributeTypeMap;
  }

  public constructor() {}
}
