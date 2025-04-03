import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * JSON object containing all event attributes and their associated values.
 */
export class AuditLogsEventAttributes {
  /**
   * JSON object of attributes from Audit Logs events.
   */
  "attributes"?: any;
  /**
   * Message of the event.
   */
  "message"?: string;
  /**
   * Name of the application or service generating Audit Logs events.
   * This name is used to correlate Audit Logs to APM, so make sure you specify the same
   * value when you use both products.
   */
  "service"?: string;
  /**
   * Array of tags associated with your event.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your event.
   */
  "timestamp"?: Date;
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
    attributes: {
      baseName: "attributes",
      type: "any",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
