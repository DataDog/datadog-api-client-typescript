/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RuleBasedViewData } from "./RuleBasedViewData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing an aggregated view of compliance rules with their finding statistics.
 */
export class RuleBasedViewResponse {
  /**
   * Data envelope for the rule-based view response.
   */
  "data": RuleBasedViewData;

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
      type: "RuleBasedViewData",
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
    return RuleBasedViewResponse.attributeTypeMap;
  }

  public constructor() {}
}
