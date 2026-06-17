/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The aggregation applied to an audit log query.
 */
export class GovernanceInsightAuditCompute {
  /**
   * The aggregation function to apply.
   */
  "aggregation": string;
  /**
   * The aggregation time window, in milliseconds.
   */
  "interval": number;
  /**
   * The metric or attribute to aggregate.
   */
  "metric": string;
  /**
   * An optional secondary aggregation applied to the audit query result.
   */
  "rollup"?: string;

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
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      required: true,
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    rollup: {
      baseName: "rollup",
      type: "string",
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
    return GovernanceInsightAuditCompute.attributeTypeMap;
  }

  public constructor() {}
}
