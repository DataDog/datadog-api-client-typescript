/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsAnalysisPlanV2DTOData } from "./ExperimentsAnalysisPlanV2DTOData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the analysis settings for an experiment.
 */
export class ExperimentsAnalysisPlanV2DTO {
  /**
   * Analysis plan resource with its identifier and settings.
   */
  "data": ExperimentsAnalysisPlanV2DTOData;

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
      type: "ExperimentsAnalysisPlanV2DTOData",
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
    return ExperimentsAnalysisPlanV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
