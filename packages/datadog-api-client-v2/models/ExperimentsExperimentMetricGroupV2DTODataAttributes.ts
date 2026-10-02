/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems } from "./ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Name, purpose, and selected metrics of an experiment metric group.
 */
export class ExperimentsExperimentMetricGroupV2DTODataAttributes {
  /**
   * Whether this group contains the experiment decision metrics.
   */
  "isDecision"?: boolean;
  /**
   * Metrics selected for this experiment metric group.
   */
  "metrics"?: Array<ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems>;
  /**
   * Metadata associated with migration of this resource.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the experiment metric group.
   */
  "name"?: string;

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
    isDecision: {
      baseName: "is_decision",
      type: "boolean",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems>",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
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
    return ExperimentsExperimentMetricGroupV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
