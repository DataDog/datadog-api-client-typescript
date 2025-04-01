/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelQuery } from "./FunnelQuery";
import { FunnelRequestType } from "./FunnelRequestType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Updated funnel widget.
*/
export class FunnelWidgetRequest {
  /**
   * Updated funnel widget.
  */
  "query": FunnelQuery;
  /**
   * Widget request type.
  */
  "requestType": FunnelRequestType;

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
    "query": {
      "baseName": "query",
      "type": "FunnelQuery",
      "required": true,
    },
    "requestType": {
      "baseName": "request_type",
      "type": "FunnelRequestType",
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




    return FunnelWidgetRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









