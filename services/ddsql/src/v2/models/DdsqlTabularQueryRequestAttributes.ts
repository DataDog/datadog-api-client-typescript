import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DdsqlTabularQueryTimeWindow } from "./DdsqlTabularQueryTimeWindow";

/**
 * Attributes describing the DDSQL query to execute.
 */
export class DdsqlTabularQueryRequestAttributes {
  /**
   * The DDSQL statement to execute. DDSQL is Datadog's SQL dialect, which is a subset
   * of PostgreSQL, scoped to Datadog data sources.
   */
  "query": string;
  /**
   * Cap on the number of rows returned. Defaults to 5,000 when omitted. Must be
   * between 1 and 10,000 inclusive; values outside this range are rejected with 400.
   */
  "rowLimit"?: number;
  /**
   * Time window scoping the underlying data sources, expressed in Unix milliseconds
   * since the epoch. Inclusive on `from_timestamp`, exclusive on `to_timestamp`.
   * Results from static tables (for example, `dd.hosts`) are not affected by the
   * time window, but the field must still be provided.
   */
  "time": DdsqlTabularQueryTimeWindow;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    rowLimit: {
      baseName: "row_limit",
      type: "number",
      format: "int64",
    },
    time: {
      baseName: "time",
      type: "DdsqlTabularQueryTimeWindow",
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
    return DdsqlTabularQueryRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
