/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
   * Column values in row order. The element type matches the column's `type`;
   * for example a `VARCHAR` column carries strings, a `TIMESTAMP` column carries
   * Unix-millisecond integers. `null` is allowed for missing values.
  */
  "values": Array<any>;

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
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "string",
      "required": true,
    },
    "values": {
      "baseName": "values",
      "type": "Array<any>",
      "required": true,
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

  public constructor() {











  }
}









