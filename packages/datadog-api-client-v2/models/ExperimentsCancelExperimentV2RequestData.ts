/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCancelExperimentV2RequestDataAttributes } from "./ExperimentsCancelExperimentV2RequestDataAttributes";
import { ExperimentsCancelExperimentV2RequestDataType } from "./ExperimentsCancelExperimentV2RequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Experiment cancellation resource with the experiment identifier and reason.
 */
export class ExperimentsCancelExperimentV2RequestData {
  /**
   * Reason to record when canceling the experiment.
   */
  "attributes": ExperimentsCancelExperimentV2RequestDataAttributes;
  /**
   * Identifier of the experiment to cancel.
   */
  "id"?: string;
  /**
   * Cancel experiment request resource type.
   */
  "type": ExperimentsCancelExperimentV2RequestDataType;

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
      type: "ExperimentsCancelExperimentV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsCancelExperimentV2RequestDataType",
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
    return ExperimentsCancelExperimentV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
