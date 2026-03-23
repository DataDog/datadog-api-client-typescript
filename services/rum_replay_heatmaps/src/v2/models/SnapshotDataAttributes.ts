import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a heatmap snapshot, including view context, device information, and audit metadata.
 */
export class SnapshotDataAttributes {
  /**
   * Unique identifier of the RUM application.
   */
  "applicationId"?: string;
  /**
   * Timestamp when the snapshot was created.
   */
  "createdAt"?: Date;
  /**
   * Display name of the user who created the snapshot.
   */
  "createdBy"?: string;
  /**
   * Email handle of the user who created the snapshot.
   */
  "createdByHandle"?: string;
  /**
   * Numeric identifier of the user who created the snapshot.
   */
  "createdByUserId"?: number;
  /**
   * Device type used when capturing the snapshot (e.g., desktop, mobile, tablet).
   */
  "deviceType"?: string;
  /**
   * Unique identifier of the RUM event associated with the snapshot.
   */
  "eventId"?: string;
  /**
   * Indicates whether the device type was explicitly selected by the user rather than auto-detected.
   */
  "isDeviceTypeSelectedByUser"?: boolean;
  /**
   * Timestamp when the snapshot was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Numeric identifier of the organization that owns the snapshot.
   */
  "orgId"?: number;
  /**
   * Unique identifier of the RUM session associated with the snapshot.
   */
  "sessionId"?: string;
  /**
   * Human-readable name for the snapshot.
   */
  "snapshotName"?: string;
  /**
   * Offset in milliseconds from the start of the session at which the snapshot was captured.
   */
  "start"?: number;
  /**
   * Unique identifier of the RUM view associated with the snapshot.
   */
  "viewId"?: string;
  /**
   * URL path or name of the view where the snapshot was captured.
   */
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
