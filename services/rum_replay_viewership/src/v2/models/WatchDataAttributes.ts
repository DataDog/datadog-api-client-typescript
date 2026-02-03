import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class WatchDataAttributes {
  "applicationId": string;
  "dataSource"?: string;
  "eventId": string;
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
