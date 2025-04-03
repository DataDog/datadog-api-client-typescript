import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Downtime match details.
 */
export class MonitorDowntimeMatchResponseAttributes {
  /**
   * The end of the downtime.
   */
  "end"?: Date;
  /**
   * An array of groups associated with the downtime.
   */
  "groups"?: Array<string>;
  /**
   * The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).
   */
  "scope"?: string;
  /**
   * The start of the downtime.
   */
  "start"?: Date;
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
    end: {
      baseName: "end",
      type: "Date",
      format: "date-time",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    start: {
      baseName: "start",
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
    return MonitorDowntimeMatchResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
