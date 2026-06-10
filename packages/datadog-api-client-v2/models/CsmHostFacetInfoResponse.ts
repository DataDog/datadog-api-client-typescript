/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmHostFacetInfoData } from "./CsmHostFacetInfoData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response returned when requesting value distribution for a specific facet.
 */
export class CsmHostFacetInfoResponse {
  /**
   * The data wrapper for a facet info response.
   */
  "data": CsmHostFacetInfoData;

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
      type: "CsmHostFacetInfoData",
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
    return CsmHostFacetInfoResponse.attributeTypeMap;
  }

  public constructor() {}
}
