/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSEventBridgeCreateStatus } from "./AWSEventBridgeCreateStatus";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A created EventBridge source.
*/
export class AWSEventBridgeCreateResponse {
  /**
   * The event source name.
  */
  "eventSourceName"?: string;
  /**
   * True if the event bus was created in addition to the source.
  */
  "hasBus"?: boolean;
  /**
   * The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
  */
  "region"?: string;
  /**
   * The event source status "created".
  */
  "status"?: AWSEventBridgeCreateStatus;

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
    "eventSourceName": {
      "baseName": "event_source_name",
      "type": "string",
    },
    "hasBus": {
      "baseName": "has_bus",
      "type": "boolean",
    },
    "region": {
      "baseName": "region",
      "type": "string",
    },
    "status": {
      "baseName": "status",
      "type": "AWSEventBridgeCreateStatus",
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




    return AWSEventBridgeCreateResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









