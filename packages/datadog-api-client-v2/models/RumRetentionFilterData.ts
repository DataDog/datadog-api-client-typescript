/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionFilterAttributes } from "./RumRetentionFilterAttributes";
import { RumRetentionFilterType } from "./RumRetentionFilterType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The RUM retention filter.
*/
export class RumRetentionFilterData {
  /**
   * The object describing attributes of a RUM retention filter.
  */
  "attributes"?: RumRetentionFilterAttributes;
  /**
   * ID of retention filter in UUID.
  */
  "id"?: string;
  /**
   * The type of the resource. The value should always be retention_filters.
  */
  "type"?: RumRetentionFilterType;

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
      "type": "RumRetentionFilterAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "RumRetentionFilterType",
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




    return RumRetentionFilterData.attributeTypeMap;

  }

  public constructor() {











  }
}









