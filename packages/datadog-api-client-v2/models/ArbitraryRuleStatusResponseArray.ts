/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryRuleStatusResponseData } from "./ArbitraryRuleStatusResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Processing statuses for all custom allocation rules in the specified organization.
 */
export class ArbitraryRuleStatusResponseArray {
  /**
   * Processing status for a custom allocation rule.
   */
  "data": Array<ArbitraryRuleStatusResponseData>;

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
      type: "Array<ArbitraryRuleStatusResponseData>",
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
    return ArbitraryRuleStatusResponseArray.attributeTypeMap;
  }

  public constructor() {}
}
