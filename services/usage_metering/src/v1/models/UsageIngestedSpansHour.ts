import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Ingested spans usage for a given organization for a given hour.
 */
export class UsageIngestedSpansHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the total number of bytes ingested for APM spans during a given hour.
   */
  "ingestedEventsBytes"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
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
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    ingestedEventsBytes: {
      baseName: "ingested_events_bytes",
      type: "number",
      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
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
    return UsageIngestedSpansHour.attributeTypeMap;
  }

  public constructor() {}
}
