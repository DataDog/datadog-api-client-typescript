/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsRefreshExperimentResultsBatchMetaV2DTO } from "./ExperimentsRefreshExperimentResultsBatchMetaV2DTO";
import { ExperimentsRefreshExperimentResultsV2DTOData } from "./ExperimentsRefreshExperimentResultsV2DTOData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of experiment refresh result resources.
 */
export class ExperimentsRefreshExperimentResultsV2DTOArray {
  /**
   * Resources returned in this response.
   */
  "data": Array<ExperimentsRefreshExperimentResultsV2DTOData>;
  /**
   * Summary of refresh outcomes across the organization's experiments.
   */
  "meta"?: ExperimentsRefreshExperimentResultsBatchMetaV2DTO;

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
      type: "Array<ExperimentsRefreshExperimentResultsV2DTOData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsRefreshExperimentResultsBatchMetaV2DTO",
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
    return ExperimentsRefreshExperimentResultsV2DTOArray.attributeTypeMap;
  }

  public constructor() {}
}
