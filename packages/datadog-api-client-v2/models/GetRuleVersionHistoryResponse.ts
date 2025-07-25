/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetRuleVersionHistoryData } from "./GetRuleVersionHistoryData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for getting the rule version history.
 */
export class GetRuleVersionHistoryResponse {
  /**
   * Data for the rule version history.
   */
  "data"?: GetRuleVersionHistoryData;

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
      type: "GetRuleVersionHistoryData",
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
    return GetRuleVersionHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
