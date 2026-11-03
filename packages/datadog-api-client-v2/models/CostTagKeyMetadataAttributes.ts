/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Cloud Cost Management tag key metadata entry.
 */
export class CostTagKeyMetadataAttributes {
  /**
   * Number of unique tag values observed for this tag key, keyed by cloud account ID.
   */
  "cardinalityByAccount": { [key: string]: number };
  /**
   * Total cost (in the report currency) of cost line items that carry this tag key for the requested period.
   */
  "costCovered": number;
  /**
   * The day this row corresponds to, in `YYYY-MM-DD` format. Present only when `filter[daily]=true`; omitted for the monthly roll-up returned by default.
   */
  "date"?: string;
  /**
   * The Cloud Cost Management metric this row aggregates, for example `aws.cost.net.amortized`.
   */
  "metric": string;
  /**
   * Number of cost rows that carry this tag key over the requested period.
   */
  "rowCount": number;
  /**
   * Origins where this tag key was observed (for example, `aws-user-defined`).
   */
  "tagSources": Array<string>;
  /**
   * A sample of the most frequent tag values observed for this tag key, keyed by cloud account ID.
   */
  "topValuesByAccount": { [key: string]: Array<string> };

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
    cardinalityByAccount: {
      baseName: "cardinality_by_account",
      type: "{ [key: string]: number; }",
      required: true,
    },
    costCovered: {
      baseName: "cost_covered",
      type: "number",
      required: true,
      format: "double",
    },
    date: {
      baseName: "date",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    rowCount: {
      baseName: "row_count",
      type: "number",
      required: true,
      format: "int64",
    },
    tagSources: {
      baseName: "tag_sources",
      type: "Array<string>",
      required: true,
    },
    topValuesByAccount: {
      baseName: "top_values_by_account",
      type: "{ [key: string]: Array<string>; }",
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
    return CostTagKeyMetadataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
