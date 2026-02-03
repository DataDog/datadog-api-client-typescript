import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class SnapshotDataAttributes {
  "applicationId"?: string;
  "createdAt"?: Date;
  "createdBy"?: string;
  "createdByHandle"?: string;
  "createdByUserId"?: number;
  "deviceType"?: string;
  "eventId"?: string;
  "isDeviceTypeSelectedByUser"?: boolean;
  "modifiedAt"?: Date;
  "orgId"?: number;
  "sessionId"?: string;
  "snapshotName"?: string;
  "start"?: number;
  "viewId"?: string;
  "viewName"?: string;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    createdByHandle: {
      baseName: "created_by_handle",
      type: "string",
    },
    createdByUserId: {
      baseName: "created_by_user_id",
      type: "number",
      format: "int64",
    },
    deviceType: {
      baseName: "device_type",
      type: "string",
    },
    eventId: {
      baseName: "event_id",
      type: "string",
    },
    isDeviceTypeSelectedByUser: {
      baseName: "is_device_type_selected_by_user",
      type: "boolean",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
    },
    snapshotName: {
      baseName: "snapshot_name",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
    },
    viewId: {
      baseName: "view_id",
      type: "string",
    },
    viewName: {
      baseName: "view_name",
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
    return SnapshotDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
