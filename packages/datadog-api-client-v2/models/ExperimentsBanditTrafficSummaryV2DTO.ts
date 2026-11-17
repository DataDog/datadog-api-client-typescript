/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditTrafficSummaryV2DTOData } from "./ExperimentsBanditTrafficSummaryV2DTOData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a bandit's traffic summary.
 */
export class ExperimentsBanditTrafficSummaryV2DTO {
  /**
   * JSON:API resource containing a bandit's traffic summary.
   */
  "data": ExperimentsBanditTrafficSummaryV2DTOData;

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
      type: "ExperimentsBanditTrafficSummaryV2DTOData",
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
    return ExperimentsBanditTrafficSummaryV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
