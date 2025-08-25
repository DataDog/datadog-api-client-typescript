/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCreatePipelineEventRequestAttributes } from "./CIAppCreatePipelineEventRequestAttributes";
import { CIAppCreatePipelineEventRequestDataType } from "./CIAppCreatePipelineEventRequestDataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data of the pipeline event to create.
*/
export class CIAppCreatePipelineEventRequestData {
  /**
   * Attributes of the pipeline event to create.
  */
  "attributes"?: CIAppCreatePipelineEventRequestAttributes;
  /**
   * Type of the event.
  */
  "type"?: CIAppCreatePipelineEventRequestDataType;

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
      "type": "CIAppCreatePipelineEventRequestAttributes",
    },
    "type": {
      "baseName": "type",
      "type": "CIAppCreatePipelineEventRequestDataType",
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




    return CIAppCreatePipelineEventRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









