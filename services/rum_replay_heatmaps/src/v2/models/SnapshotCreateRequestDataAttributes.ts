import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class SnapshotCreateRequestDataAttributes {
  "applicationId": string;
  "deviceType": string;
  "eventId": string;
  "isDeviceTypeSelectedByUser": boolean;
  "sessionId"?: string;
  "snapshotName": string;
  "start": number;
  "viewId"?: string;
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
