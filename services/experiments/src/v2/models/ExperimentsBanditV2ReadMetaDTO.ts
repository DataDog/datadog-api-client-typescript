import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditV2WarningDTO } from "./ExperimentsBanditV2WarningDTO";

/**
 * Information about the bandit response.
 */
export class ExperimentsBanditV2ReadMetaDTO {
  /**
   * Things the caller should know about the response. Absent when there are none.
   */
  "warnings"?: Array<ExperimentsBanditV2WarningDTO>;
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
    warnings: {
      baseName: "warnings",
      type: "Array<ExperimentsBanditV2WarningDTO>",
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
    return ExperimentsBanditV2ReadMetaDTO.attributeTypeMap;
  }

  public constructor() {}
}
