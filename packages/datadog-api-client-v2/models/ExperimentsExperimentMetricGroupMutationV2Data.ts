/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentMetricGroupV2DTODataAttributes } from "./ExperimentsExperimentMetricGroupV2DTODataAttributes";
import { ExperimentsPatchExperimentMetricGroupV2RequestDataType } from "./ExperimentsPatchExperimentMetricGroupV2RequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Experiment metric group resource with its identifier and metric selection.
 */
export class ExperimentsExperimentMetricGroupMutationV2Data {
  /**
   * Name, purpose, and selected metrics of an experiment metric group.
   */
  "attributes"?: ExperimentsExperimentMetricGroupV2DTODataAttributes;
  /**
   * Identifier of the experiment metric group.
   */
  "id": string;
  /**
   * Experiment metric groups resource type.
   */
  "type": ExperimentsPatchExperimentMetricGroupV2RequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "ExperimentsExperimentMetricGroupV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPatchExperimentMetricGroupV2RequestDataType",
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
    return ExperimentsExperimentMetricGroupMutationV2Data.attributeTypeMap;
  }

  public constructor() {}
}
