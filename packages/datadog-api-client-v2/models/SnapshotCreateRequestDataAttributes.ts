/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a heatmap snapshot, including the view, session, event, and device context.
 */
export class SnapshotCreateRequestDataAttributes {
  /**
   * Unique identifier of the RUM application.
   */
  "applicationId": string;
  /**
   * Device type used when capturing the snapshot (e.g., desktop, mobile, tablet).
   */
  "deviceType": string;
  /**
   * Unique identifier of the RUM event associated with the snapshot.
   */
  "eventId": string;
  /**
   * Indicates whether the device type was explicitly selected by the user rather than auto-detected.
   */
  "isDeviceTypeSelectedByUser": boolean;
  /**
   * Unique identifier of the RUM session associated with the snapshot.
   */
  "sessionId"?: string;
  /**
   * Human-readable name for the snapshot.
   */
  "snapshotName": string;
  /**
   * Offset in milliseconds from the start of the session at which the snapshot was captured.
   */
  "start": number;
  /**
   * Unique identifier of the RUM view associated with the snapshot.
   */
  "viewId"?: string;
  /**
   * URL path or name of the view where the snapshot was captured.
   */
  "viewName": string;

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
      required: true,
    },
    deviceType: {
      baseName: "device_type",
      type: "string",
      required: true,
    },
    eventId: {
      baseName: "event_id",
      type: "string",
      required: true,
    },
    isDeviceTypeSelectedByUser: {
      baseName: "is_device_type_selected_by_user",
      type: "boolean",
      required: true,
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
    },
    snapshotName: {
      baseName: "snapshot_name",
      type: "string",
      required: true,
    },
    start: {
      baseName: "start",
      type: "number",
      required: true,
      format: "int64",
    },
    viewId: {
      baseName: "view_id",
      type: "string",
    },
    viewName: {
      baseName: "view_name",
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
    return SnapshotCreateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
