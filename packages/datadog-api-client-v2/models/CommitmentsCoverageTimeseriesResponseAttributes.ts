/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsCoverageTimeseriesMetric } from "./CommitmentsCoverageTimeseriesMetric";
import { CommitmentsQueryDefinition } from "./CommitmentsQueryDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a timeseries coverage response.
 */
export class CommitmentsCoverageTimeseriesResponseAttributes {
  /**
   * A coverage timeseries metric. For AWS and Azure, `series` holds the `on_demand_only`, `spot_only`, `ri`,
   * and `sp` buckets, plus `ppp` for Azure pre-purchase plans when enabled. For GCP, `series` holds the
   * `on_demand_only` and `flex_cud` buckets.
   */
  "cost": CommitmentsCoverageTimeseriesMetric;
  /**
   * A coverage timeseries metric. For AWS and Azure, `series` holds the `on_demand_only`, `spot_only`, `ri`,
   * and `sp` buckets, plus `ppp` for Azure pre-purchase plans when enabled. For GCP, `series` holds the
   * `on_demand_only` and `flex_cud` buckets.
   */
  "hours": CommitmentsCoverageTimeseriesMetric;
  /**
   * The query that produces the response values, in the same format as dashboard and notebook widget
   * requests, so a client can graph the values in a widget. Each formula's `id` names the response value
   * that it produces.
   */
  "queryDefinition"?: CommitmentsQueryDefinition;

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
    cost: {
      baseName: "cost",
      type: "CommitmentsCoverageTimeseriesMetric",
      required: true,
    },
    hours: {
      baseName: "hours",
      type: "CommitmentsCoverageTimeseriesMetric",
      required: true,
    },
    queryDefinition: {
      baseName: "query_definition",
      type: "CommitmentsQueryDefinition",
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
    return CommitmentsCoverageTimeseriesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
