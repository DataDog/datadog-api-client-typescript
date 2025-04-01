/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafExclusionFilterAttributes } from "./ApplicationSecurityWafExclusionFilterAttributes";
import { ApplicationSecurityWafExclusionFilterType } from "./ApplicationSecurityWafExclusionFilterType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A JSON:API resource for an WAF exclusion filter.
*/
export class ApplicationSecurityWafExclusionFilterResource {
  /**
   * Attributes describing a WAF exclusion filter.
  */
  "attributes"?: ApplicationSecurityWafExclusionFilterAttributes;
  /**
   * The identifier of the WAF exclusion filter.
  */
  "id"?: string;
  /**
   * Type of the resource. The value should always be `exclusion_filter`.
  */
  "type"?: ApplicationSecurityWafExclusionFilterType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "ApplicationSecurityWafExclusionFilterAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "ApplicationSecurityWafExclusionFilterType",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ApplicationSecurityWafExclusionFilterResource.attributeTypeMap;

  }

  public constructor() {











  }
}









