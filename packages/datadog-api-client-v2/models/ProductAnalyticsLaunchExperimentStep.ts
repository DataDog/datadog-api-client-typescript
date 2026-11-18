/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Experiment linked to the launch. The draft fields are cleared when `experiment_id` is set.
 */
export class ProductAnalyticsLaunchExperimentStep {
  /**
   * UUID of the linked experiment.
   */
  "experimentId"?: string;
  /**
   * Hypothesis of a draft experiment.
   */
  "hypothesis"?: string;
  /**
   * Name of a draft experiment.
   */
  "name"?: string;
  /**
   * Protocol ID of a draft experiment.
   */
  "protocolId"?: string;

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
    experimentId: {
      baseName: "experiment_id",
      type: "string",
    },
    hypothesis: {
      baseName: "hypothesis",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    protocolId: {
      baseName: "protocol_id",
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
    return ProductAnalyticsLaunchExperimentStep.attributeTypeMap;
  }

  public constructor() {}
}
