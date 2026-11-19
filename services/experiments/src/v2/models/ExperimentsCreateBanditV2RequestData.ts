import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditV2DTODataType } from "./ExperimentsBanditV2DTODataType";
import { ExperimentsCreateBanditV2RequestDataAttributes } from "./ExperimentsCreateBanditV2RequestDataAttributes";

/**
 * Bandit resource to create.
 */
export class ExperimentsCreateBanditV2RequestData {
  /**
   * The new draft's setup. Only `name` is required. Whether the draft is ready to run is checked when it starts.
   */
  "attributes": ExperimentsCreateBanditV2RequestDataAttributes;
  /**
   * Bandit resource type.
   */
  "type": ExperimentsBanditV2DTODataType;
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
      type: "ExperimentsCreateBanditV2RequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExperimentsBanditV2DTODataType",
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
    return ExperimentsCreateBanditV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
