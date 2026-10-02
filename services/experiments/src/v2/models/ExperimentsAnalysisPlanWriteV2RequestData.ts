import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsAnalysisPlanWriteV2RequestDataAttributes } from "./ExperimentsAnalysisPlanWriteV2RequestDataAttributes";
import { ExperimentsAnalysisPlanWriteV2RequestDataType } from "./ExperimentsAnalysisPlanWriteV2RequestDataType";

/**
 * Analysis plan resource to update.
 */
export class ExperimentsAnalysisPlanWriteV2RequestData {
  /**
   * Statistical settings and duration targets to apply to the experiment.
   */
  "attributes"?: ExperimentsAnalysisPlanWriteV2RequestDataAttributes;
  /**
   * Identifier of the experiment. If supplied, it must match experiment_id in the path.
   */
  "id"?: string;
  /**
   * Analysis plans resource type.
   */
  "type": ExperimentsAnalysisPlanWriteV2RequestDataType;
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
      type: "ExperimentsAnalysisPlanWriteV2RequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsAnalysisPlanWriteV2RequestDataType",
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
    return ExperimentsAnalysisPlanWriteV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
