import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsDateRemapperType } from "./LogsDateRemapperType";

/**
 * As Datadog receives logs, it timestamps them using the value(s) from any of these default attributes.
 *
 *   - `timestamp`
 *   - `date`
 *   - `_timestamp`
 *   - `Timestamp`
 *   - `eventTime`
 *   - `published_date`
 *
 *   If your logs put their dates in an attribute not in this list,
 *   use the log date Remapper Processor to define their date attribute as the official log timestamp.
 *   The recognized date formats are ISO8601, UNIX (the milliseconds EPOCH format), and RFC3164.
 *
 *   **Note:** If your logs don’t contain any of the default attributes
 *   and you haven’t defined your own date attribute, Datadog timestamps
 *   the logs with the date it received them.
 *
 *   If multiple log date remapper processors can be applied to a given log,
 *   only the first one (according to the pipelines order) is taken into account.
 */
export class LogsDateRemapper {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  /**
   * Type of logs date remapper.
   */
  "type": LogsDateRemapperType;
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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsDateRemapperType",
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
    return LogsDateRemapper.attributeTypeMap;
  }

  public constructor() {}
}
