/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryRuleResponseArrayMeta } from "./ArbitraryRuleResponseArrayMeta";
import { ArbitraryRuleResponseData } from "./ArbitraryRuleResponseData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of `ArbitraryRuleResponseArray` object.
*/
export class ArbitraryRuleResponseArray {
  /**
   * The `ArbitraryRuleResponseArray` `data`.
  */
  "data": Array<ArbitraryRuleResponseData>;
  /**
   * The `ArbitraryRuleResponseArray` `meta`.
  */
  "meta"?: ArbitraryRuleResponseArrayMeta;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "data": {
      "baseName": "data",
      "type": "Array<ArbitraryRuleResponseData>",
      "required": true,
    },
    "meta": {
      "baseName": "meta",
      "type": "ArbitraryRuleResponseArrayMeta",
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




    return ArbitraryRuleResponseArray.attributeTypeMap;

  }

  public constructor() {











  }
}









