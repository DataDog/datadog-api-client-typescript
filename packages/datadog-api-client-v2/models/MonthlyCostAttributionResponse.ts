/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonthlyCostAttributionBody } from "./MonthlyCostAttributionBody";
import { MonthlyCostAttributionMeta } from "./MonthlyCostAttributionMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the monthly cost attribution by tag(s).
 */
export class MonthlyCostAttributionResponse {
  /**
   * Response containing cost attribution.
   */
  "data"?: Array<MonthlyCostAttributionBody>;
  /**
   * The object containing document metadata.
   */
  "meta"?: MonthlyCostAttributionMeta;

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
      type: "Array<MonthlyCostAttributionBody>",
    },
    meta: {
      baseName: "meta",
      type: "MonthlyCostAttributionMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyCostAttributionResponse.attributeTypeMap;
  }

  public constructor() {}
}
