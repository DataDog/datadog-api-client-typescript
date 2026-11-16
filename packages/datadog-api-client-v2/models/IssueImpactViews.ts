/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueImpactView } from "./IssueImpactView";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * RUM views where the issue occurred.
 */
export class IssueImpactViews {
  /**
   * Number of distinct view names where the issue occurred in the time window.
   */
  "distinctCount": Int64;
  /**
   * Up to five views with the most errors, most affected first.
   */
  "top": Array<IssueImpactView>;

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
    distinctCount: {
      baseName: "distinct_count",
      type: "number",
      required: true,
      format: "int64",
    },
    top: {
      baseName: "top",
      type: "Array<IssueImpactView>",
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
    return IssueImpactViews.attributeTypeMap;
  }

  public constructor() {}
}
