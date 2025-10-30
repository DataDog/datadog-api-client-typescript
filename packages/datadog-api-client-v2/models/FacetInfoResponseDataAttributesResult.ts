/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FacetInfoResponseDataAttributesResultRange } from "./FacetInfoResponseDataAttributesResultRange";
import { FacetInfoResponseDataAttributesResultValuesItems } from "./FacetInfoResponseDataAttributesResultValuesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FacetInfoResponseDataAttributesResult {
  "range"?: FacetInfoResponseDataAttributesResultRange;
  "values"?: Array<FacetInfoResponseDataAttributesResultValuesItems>;

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
    range: {
      baseName: "range",
      type: "FacetInfoResponseDataAttributesResultRange",
    },
    values: {
      baseName: "values",
      type: "Array<FacetInfoResponseDataAttributesResultValuesItems>",
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
    return FacetInfoResponseDataAttributesResult.attributeTypeMap;
  }

  public constructor() {}
}
