/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Facet value and number of occurrences for a property field of an incident.
 */
export class IncidentSearchResponseFieldFacetData {
  /**
   * Count of the facet value appearing in search results.
   */
  "count"?: number;
  /**
   * The facet value appearing in search results.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      type: "number",
      format: "int32",
    },
    name: {
      type: "string",
    },
  };
}
