/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipFeedbackResultAttributes } from "./OwnershipFeedbackResultAttributes";
import { OwnershipFeedbackResultType } from "./OwnershipFeedbackResultType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The data wrapper for an ownership feedback result response.
*/
export class OwnershipFeedbackResultData {
  /**
   * The attributes of an ownership feedback result.
  */
  "attributes": OwnershipFeedbackResultAttributes;
  /**
   * The identifier of the resource that the feedback was applied to.
  */
  "id": string;
  /**
   * The type of the ownership feedback result resource. The value should always be `ownership_feedback_result`.
  */
  "type": OwnershipFeedbackResultType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

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
      "type": "OwnershipFeedbackResultAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "OwnershipFeedbackResultType",
      "required": true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return OwnershipFeedbackResultData.attributeTypeMap;

  }

  public constructor() {











  }
}









