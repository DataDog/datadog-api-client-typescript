import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes } from "./ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes";
import { ExperimentsPatchExperimentMetricGroupV2RequestDataType } from "./ExperimentsPatchExperimentMetricGroupV2RequestDataType";

/**
 * JSON:API resource containing the experiment metric group identity and fields.
 */
export class ExperimentsPatchExperimentMetricGroupV2RequestData {
  /**
   * Fields supplied to update the experiment metric group.
   */
  "attributes"?: ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes;
  /**
   * ID of the experiment metric group.
   */
  "id"?: string;
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
      type: "ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ExperimentsPatchExperimentMetricGroupV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
