/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DdsqlTabularQueryColumn } from "./DdsqlTabularQueryColumn";
import { DdsqlTabularQueryState } from "./DdsqlTabularQueryState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a DDSQL tabular query response. `query_id` is set when
 * `state` is `running`; `columns` is set when `state` is `completed`.
 */
export class DdsqlTabularQueryResponseAttributes {
  /**
   * Column-major result set. Each element carries one column's name, type, and values,
   * with one value per row of the result. Set when `state` is `completed`.
   */
  "columns"?: Array<DdsqlTabularQueryColumn>;
  /**
   * Opaque token to pass to the fetch endpoint to poll for results.
   * Set when `state` is `running` and absent when `state` is `completed`.
   */
  "queryId"?: string;
  /**
   * Lifecycle state of a DDSQL tabular query response.
   * `running` means the query is still executing and the client should poll
   * the fetch endpoint with the returned `query_id`. `completed` means the
   * result set is inlined in `columns` and no further polling is required.
   */
  "state": DdsqlTabularQueryState;
  /**
   * Non-fatal messages emitted by the query engine while serving this response.
   */
  "warnings"?: Array<string>;

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
    columns: {
      baseName: "columns",
      type: "Array<DdsqlTabularQueryColumn>",
    },
    queryId: {
      baseName: "query_id",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "DdsqlTabularQueryState",
      required: true,
    },
    warnings: {
      baseName: "warnings",
      type: "Array<string>",
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
    return DdsqlTabularQueryResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
