import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleResponseArrayMeta } from "./ArbitraryRuleResponseArrayMeta";
import { ArbitraryRuleResponseData } from "./ArbitraryRuleResponseData";

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
    data: {
      baseName: "data",
      type: "Array<ArbitraryRuleResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ArbitraryRuleResponseArrayMeta",
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

  public constructor() {}
}
