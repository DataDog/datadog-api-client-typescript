/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomerOrgDisableRequestAttributes } from "./CustomerOrgDisableRequestAttributes";
import { CustomerOrgDisableType } from "./CustomerOrgDisableType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object for a customer org disable request.
*/
export class CustomerOrgDisableRequestData {
  /**
   * Optional attributes for a customer org disable request. When supplied, `org_uuid`
   * must match the authenticated organization or the request is rejected.
  */
  "attributes"?: CustomerOrgDisableRequestAttributes;
  /**
   * Optional client-supplied identifier for the request. Useful for client-side
   * correlation; the server does not use this value.
  */
  "id"?: string;
  /**
   * JSON:API resource type for a customer org disable request.
  */
  "type": CustomerOrgDisableType;

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
      "type": "CustomerOrgDisableRequestAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "CustomerOrgDisableType",
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




    return CustomerOrgDisableRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









