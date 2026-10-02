/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsRefreshExperimentResultsV2DTOData } from "./ExperimentsRefreshExperimentResultsV2DTOData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the experiment refresh result.
 */
export class ExperimentsRefreshExperimentResultsV2DTO {
  /**
   * JSON:API resource containing the experiment refresh result identity and fields.
   */
  "data": ExperimentsRefreshExperimentResultsV2DTOData;

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
      type: "ExperimentsRefreshExperimentResultsV2DTOData",
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
    return ExperimentsRefreshExperimentResultsV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
