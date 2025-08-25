/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAListDeploymentsRequestAttributes } from "./DORAListDeploymentsRequestAttributes";
import { DORAListDeploymentsRequestDataType } from "./DORAListDeploymentsRequestDataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The JSON:API data.
*/
export class DORAListDeploymentsRequestData {
  /**
   * Attributes to get a list of deployments.
  */
  "attributes": DORAListDeploymentsRequestAttributes;
  /**
   * The definition of `DORAListDeploymentsRequestDataType` object.
  */
  "type"?: DORAListDeploymentsRequestDataType;

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
      "type": "DORAListDeploymentsRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "DORAListDeploymentsRequestDataType",
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




    return DORAListDeploymentsRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









