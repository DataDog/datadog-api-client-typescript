/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems } from "./ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fields supplied to update the experiment metric group.
 */
export class ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes {
  /**
   * Metrics included in this group.
   */
  "metrics"?: Array<ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems>;
  /**
   * Metadata retained for resources imported from another system.
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
    metrics: {
      baseName: "metrics",
      type: "Array<ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems>",
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
    return ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
