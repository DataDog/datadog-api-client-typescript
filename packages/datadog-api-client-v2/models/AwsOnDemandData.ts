/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsOnDemandAttributes } from "./AwsOnDemandAttributes";
import { AwsOnDemandType } from "./AwsOnDemandType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Single AWS on demand task.
*/
export class AwsOnDemandData {
  /**
   * Attributes for the AWS on demand task.
  */
  "attributes"?: AwsOnDemandAttributes;
  /**
   * The UUID of the task.
  */
  "id"?: string;
  /**
   * The type of the on demand task. The value should always be `aws_resource`.
  */
  "type"?: AwsOnDemandType;

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
      "type": "AwsOnDemandAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "AwsOnDemandType",
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




    return AwsOnDemandData.attributeTypeMap;

  }

  public constructor() {











  }
}









