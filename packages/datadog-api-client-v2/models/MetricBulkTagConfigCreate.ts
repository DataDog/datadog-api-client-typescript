/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricBulkConfigureTagsType } from "./MetricBulkConfigureTagsType";
import { MetricBulkTagConfigCreateAttributes } from "./MetricBulkTagConfigCreateAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Request object to bulk configure tags for metrics matching the given prefix.
*/
export class MetricBulkTagConfigCreate {
  /**
   * Optional parameters for bulk creating metric tag configurations.
  */
  "attributes"?: MetricBulkTagConfigCreateAttributes;
  /**
   * A text prefix to match against metric names.
  */
  "id": string;
  /**
   * The metric bulk configure tags resource.
  */
  "type": MetricBulkConfigureTagsType;

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
      "type": "MetricBulkTagConfigCreateAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "MetricBulkConfigureTagsType",
      "required": true,
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




    return MetricBulkTagConfigCreate.attributeTypeMap;

  }

  public constructor() {











  }
}









