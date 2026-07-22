/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmFacetInfoType } from "./CsmFacetInfoType";
import { CsmHostFacetInfoAttributes } from "./CsmHostFacetInfoAttributes";
import { CsmHostFacetInfoMeta } from "./CsmHostFacetInfoMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The data wrapper for a facet info response.
*/
export class CsmHostFacetInfoData {
  /**
   * Attributes of a facet info response, containing the value distribution for the requested facet.
  */
  "attributes": CsmHostFacetInfoAttributes;
  /**
   * The identifier of the facet.
  */
  "id": string;
  /**
   * Metadata for the facet info response.
  */
  "meta": CsmHostFacetInfoMeta;
  /**
   * The JSON:API type for facet info resources. The value should always be `facet_info`.
  */
  "type": CsmFacetInfoType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "CsmHostFacetInfoAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "meta": {
      "baseName": "meta",
      "type": "CsmHostFacetInfoMeta",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CsmFacetInfoType",
      "required": true,
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




    return CsmHostFacetInfoData.attributeTypeMap;

  }

  public constructor() {











  }
}









