/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationCounts } from "./IntegrationCounts";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the list connections response.
 */
export class ListActionConnectionsResponseMeta {
  /**
   * Count of integrations by type.
   */
  "integrationCounts"?: Array<IntegrationCounts>;
  /**
   * The total number of connections.
   */
  "total": number;
  /**
   * The total number of connections that match the specified filters.
   */
  "totalFiltered": number;

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
    integrationCounts: {
      baseName: "integration_counts",
      type: "Array<IntegrationCounts>",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
    totalFiltered: {
      baseName: "total_filtered",
      type: "number",
      required: true,
      format: "int64",
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
    return ListActionConnectionsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
