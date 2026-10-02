/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsAnalysisPlanWriteV2RequestData } from "./ExperimentsAnalysisPlanWriteV2RequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to update the analysis settings for an experiment.
 */
export class ExperimentsAnalysisPlanWriteV2Request {
  /**
   * Analysis plan resource to update.
   */
  "data": ExperimentsAnalysisPlanWriteV2RequestData;

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
      type: "ExperimentsAnalysisPlanWriteV2RequestData",
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
    return ExperimentsAnalysisPlanWriteV2Request.attributeTypeMap;
  }

  public constructor() {}
}
