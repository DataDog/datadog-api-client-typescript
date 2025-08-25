/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetAttributesRequest } from "./DatasetAttributesRequest";
import { DatasetType } from "./DatasetType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * **Datasets Object Constraints**
 * - **Tag limit per dataset**:
 *   - Each restricted dataset supports a maximum of 10 key:value pairs per product.
 * 
 * - **Tag key rules per telemetry type**:
 *   - Only one tag key or attribute may be used to define access within a single telemetry type.
 *   - The same or different tag key may be used across different telemetry types.
 * 
 * - **Tag value uniqueness**:
 *   - Tag values must be unique within a single dataset.
 *   - A tag value used in one dataset cannot be reused in another dataset of the same telemetry type.
*/
export class DatasetRequest {
  /**
   * Dataset metadata and configurations.
  */
  "attributes": DatasetAttributesRequest;
  /**
   * Resource type, always set to `dataset`.
  */
  "type": DatasetType;

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
      "type": "DatasetAttributesRequest",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "DatasetType",
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




    return DatasetRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









