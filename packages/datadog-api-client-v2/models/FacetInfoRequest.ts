/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FacetInfoRequestData } from "./FacetInfoRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for retrieving facet value information for a specified attribute with optional filtering.
 */
export class FacetInfoRequest {
  /**
   * The data object containing the resource type and attributes for the facet info request.
   */
  "data"?: FacetInfoRequestData;

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
      type: "FacetInfoRequestData",
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
    return FacetInfoRequest.attributeTypeMap;
  }

  public constructor() {}
}
