import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsStartExperimentV2RequestDataType } from "./ExperimentsStartExperimentV2RequestDataType";

/**
 * JSON:API resource containing the experiment identity.
 */
export class ExperimentsStartExperimentV2RequestData {
  /**
   * ID of the experiment.
   */
  "id"?: string;
  /**
   * Start experiment request resource type.
   */
  "type": ExperimentsStartExperimentV2RequestDataType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsStartExperimentV2RequestDataType",
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
    return ExperimentsStartExperimentV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
