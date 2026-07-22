/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityServiceAttributes } from "./ApplicationSecurityServiceAttributes";
import { ApplicationSecurityServiceType } from "./ApplicationSecurityServiceType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A JSON:API resource describing a service and its Application Security details.
*/
export class ApplicationSecurityServiceResource {
  /**
   * Application Security details describing a service in a given environment.
  */
  "attributes": ApplicationSecurityServiceAttributes;
  /**
   * The unique identifier of the service, formatted as `<service>_<environment>`.
  */
  "id": string;
  /**
   * The type of the resource. The value should always be `service_env`.
  */
  "type": ApplicationSecurityServiceType;

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
      "type": "ApplicationSecurityServiceAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ApplicationSecurityServiceType",
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




    return ApplicationSecurityServiceResource.attributeTypeMap;

  }

  public constructor() {











  }
}









