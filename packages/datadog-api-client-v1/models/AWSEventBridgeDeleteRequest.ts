/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * An object used to delete an EventBridge source.
*/
export class AWSEventBridgeDeleteRequest {
  /**
   * Your AWS Account ID without dashes.
  */
  "accountId"?: string;
  /**
   * The event source name.
  */
  "eventGeneratorName"?: string;
  /**
   * The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
  */
  "region"?: string;

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
    "accountId": {
      "baseName": "account_id",
      "type": "string",
    },
    "eventGeneratorName": {
      "baseName": "event_generator_name",
      "type": "string",
    },
    "region": {
      "baseName": "region",
      "type": "string",
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




    return AWSEventBridgeDeleteRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









