import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentMetricGroupV2RequestData } from "./ExperimentsCreateExperimentMetricGroupV2RequestData";

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
