import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentV2RequestDataAttributes } from "./ExperimentsPatchExperimentV2RequestDataAttributes";
import { ExperimentsPatchExperimentV2ResponseDataType } from "./ExperimentsPatchExperimentV2ResponseDataType";

/**
 * JSON:API resource containing the experiment identity and fields.
 */
export class ExperimentsPatchExperimentV2RequestData {
  /**
   * Fields supplied to update the experiment.
   */
  "attributes"?: ExperimentsPatchExperimentV2RequestDataAttributes;
  /**
   * ID of the experiment.
   */
  "id"?: string;
  /**
   * Experiments resource type.
   */
  "type": ExperimentsPatchExperimentV2ResponseDataType;
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
      type: "ExperimentsPatchExperimentV2RequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPatchExperimentV2ResponseDataType",
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
    return ExperimentsPatchExperimentV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
