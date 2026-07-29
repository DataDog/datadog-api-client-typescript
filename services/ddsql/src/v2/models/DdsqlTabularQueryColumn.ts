import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single column of a DDSQL tabular query result.
 */
export class DdsqlTabularQueryColumn {
  /**
   * Name of the column as projected by the SQL statement.
   */
  "name": string;
  /**
   * DDSQL data type of the column's values, for example `VARCHAR`, `BIGINT`,
   * `DECIMAL`, `BOOLEAN`, `TIMESTAMP`, `JSON`, or an array variant such as
   * `VARCHAR[]`. See the
   * [DDSQL data-types reference](https://docs.datadoghq.com/ddsql_reference/#data-types)
   * for the full, up-to-date list.
   */
  "type": string;
  /**
   * Column values in row order, one entry per result row. The element type
   * follows the column's `type`. The following serialization rules should be
   * taken into account:
   *
   * - `BIGINT` values are encoded as JSON numbers in the signed 64-bit integer range.
   * - `DECIMAL` values are encoded as JSON numbers with 64-bit double precision.
   * - `TIMESTAMP` and `DATE` values are encoded as Unix-millisecond integers; a
   *   `DATE` resolves to midnight UTC.
   * - `JSON` values are returned as a JSON-encoded string.
   *
   * `null` is allowed for any column type where a value is missing.
   */
  "values": Array<any>;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<any>",
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
    return DdsqlTabularQueryColumn.attributeTypeMap;
  }

  public constructor() {}
}
