import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditRefreshV2DTOData } from "./ExperimentsBanditRefreshV2DTOData";

/**
 * Response acknowledging a refresh that has started.
 */
export class ExperimentsBanditRefreshV2DTO {
  /**
   * The refresh that started.
   */
  "data": ExperimentsBanditRefreshV2DTOData;
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
      type: "ExperimentsBanditRefreshV2DTOData",
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
    return ExperimentsBanditRefreshV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
