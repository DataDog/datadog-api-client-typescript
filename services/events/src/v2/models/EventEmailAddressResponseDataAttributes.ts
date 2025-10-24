import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class EventEmailAddressResponseDataAttributes {
  "alertType"?: string;
  "createdAt": Date;
  "description"?: string;
  "email": string;
  "format": string;
  "lastUsedAt"?: Date;
  "notifyHandles": Array<string>;
  "revokedAt"?: Date;
  "tags": Array<string>;
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
    alertType: {
      baseName: "alert_type",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    email: {
      baseName: "email",
      type: "string",
      required: true,
    },
    format: {
      baseName: "format",
      type: "string",
      required: true,
    },
    lastUsedAt: {
      baseName: "last_used_at",
      type: "Date",
      format: "date-time",
    },
    notifyHandles: {
      baseName: "notify_handles",
      type: "Array<string>",
      required: true,
    },
    revokedAt: {
      baseName: "revoked_at",
      type: "Date",
      format: "date-time",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return EventEmailAddressResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
