/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricDistinctVolumeAttributes } from "./MetricDistinctVolumeAttributes";
import { MetricDistinctVolumeType } from "./MetricDistinctVolumeType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object for a single metric's distinct volume.
*/
export class MetricDistinctVolume {
  /**
   * Object containing the definition of a metric's distinct volume.
  */
  "attributes"?: MetricDistinctVolumeAttributes;
  /**
   * The metric name for this resource.
  */
  "id"?: string;
  /**
   * The metric distinct volume type.
  */
  "type"?: MetricDistinctVolumeType;

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
      "type": "MetricDistinctVolumeAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "MetricDistinctVolumeType",
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




    return MetricDistinctVolume.attributeTypeMap;

  }

  public constructor() {











  }
}









