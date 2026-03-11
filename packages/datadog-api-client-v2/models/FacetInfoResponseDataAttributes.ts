/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FacetInfoResponseDataAttributesResult } from "./FacetInfoResponseDataAttributesResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the facet info response, containing the facet result data.
 */
export class FacetInfoResponseDataAttributes {
  /**
   * The facet query result containing discrete value counts or a numeric range for the requested facet.
   */
  "result"?: FacetInfoResponseDataAttributesResult;

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
    result: {
      baseName: "result",
      type: "FacetInfoResponseDataAttributesResult",
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
    return FacetInfoResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
