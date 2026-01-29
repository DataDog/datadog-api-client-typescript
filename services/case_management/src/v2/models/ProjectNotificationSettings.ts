import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Project notification settings
 */
export class ProjectNotificationSettings {
  /**
   * Notification destinations (1=email, 2=slack, 3=in-app)
   */
  "destinations"?: Array<number>;
  /**
   * Whether notifications are enabled
   */
  "enabled"?: boolean;
  "notifyOnCaseAssignment"?: boolean;
  "notifyOnCaseClosed"?: boolean;
  "notifyOnCaseComment"?: boolean;
  "notifyOnCaseCommentMention"?: boolean;
  "notifyOnCasePriorityChange"?: boolean;
  "notifyOnCaseStatusChange"?: boolean;
  "notifyOnCaseUnassignment"?: boolean;
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
    destinations: {
      baseName: "destinations",
      type: "Array<number>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    notifyOnCaseAssignment: {
      baseName: "notify_on_case_assignment",
      type: "boolean",
    },
    notifyOnCaseClosed: {
      baseName: "notify_on_case_closed",
      type: "boolean",
    },
    notifyOnCaseComment: {
      baseName: "notify_on_case_comment",
      type: "boolean",
    },
    notifyOnCaseCommentMention: {
      baseName: "notify_on_case_comment_mention",
      type: "boolean",
    },
    notifyOnCasePriorityChange: {
      baseName: "notify_on_case_priority_change",
      type: "boolean",
    },
    notifyOnCaseStatusChange: {
      baseName: "notify_on_case_status_change",
      type: "boolean",
    },
    notifyOnCaseUnassignment: {
      baseName: "notify_on_case_unassignment",
      type: "boolean",
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
    return ProjectNotificationSettings.attributeTypeMap;
  }

  public constructor() {}
}
