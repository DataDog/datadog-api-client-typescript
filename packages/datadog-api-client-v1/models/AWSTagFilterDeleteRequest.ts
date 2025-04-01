/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSNamespace } from "./AWSNamespace";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The objects used to delete an AWS tag filter entry.
*/
export class AWSTagFilterDeleteRequest {
  /**
   * The unique identifier of your AWS account.
  */
  "accountId"?: string;
  /**
   * The namespace associated with the tag filter entry.
  */
  "namespace"?: AWSNamespace;

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
    "namespace": {
      "baseName": "namespace",
      "type": "AWSNamespace",
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




    return AWSTagFilterDeleteRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









