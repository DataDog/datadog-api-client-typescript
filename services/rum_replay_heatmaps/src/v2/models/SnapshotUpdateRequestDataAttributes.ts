import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class SnapshotUpdateRequestDataAttributes {
  "eventId": string;
  "isDeviceTypeSelectedByUser": boolean;
  "sessionId"?: string;
  "start": number;
  "viewId"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnapshotUpdateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
