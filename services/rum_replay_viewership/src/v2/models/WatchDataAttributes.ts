import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for recording a session watch event, including the application, event reference, and timestamp.
 */
export class WatchDataAttributes {
  /**
   * Unique identifier of the RUM application containing the session.
   */
  "applicationId": string;
  /**
   * Data source type indicating the origin of the session data (e.g., rum or product_analytics).
   */
  "dataSource"?: string;
  /**
   * Unique identifier of the RUM event that was watched.
   */
  "eventId": string;
  /**
   * Timestamp when the session was watched.
   */
  "timestamp": Date;
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
    dataSource: {
      baseName: "data_source",
      type: "string",
    },
    eventId: {
      baseName: "event_id",
      type: "string",
      required: true,
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      required: true,
      format: "date-time",
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
    return WatchDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
