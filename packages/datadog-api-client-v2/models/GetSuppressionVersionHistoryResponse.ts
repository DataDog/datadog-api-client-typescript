/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetSuppressionVersionHistoryData } from "./GetSuppressionVersionHistoryData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for getting the suppression version history.
 */
export class GetSuppressionVersionHistoryResponse {
  /**
   * Data for the suppression version history.
   */
  "data"?: GetSuppressionVersionHistoryData;

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
      type: "GetSuppressionVersionHistoryData",
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
    return GetSuppressionVersionHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
