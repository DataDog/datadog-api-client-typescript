/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentMetricGroupV2RequestData } from "./ExperimentsCreateExperimentMetricGroupV2RequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to create a metric group on an experiment.
 */
export class ExperimentsCreateExperimentMetricGroupV2Request {
  /**
   * Metric group resource to create on the experiment.
   */
  "data": ExperimentsCreateExperimentMetricGroupV2RequestData;

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
    data: {
      baseName: "data",
      type: "ExperimentsCreateExperimentMetricGroupV2RequestData",
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
    return ExperimentsCreateExperimentMetricGroupV2Request.attributeTypeMap;
  }

  public constructor() {}
}
