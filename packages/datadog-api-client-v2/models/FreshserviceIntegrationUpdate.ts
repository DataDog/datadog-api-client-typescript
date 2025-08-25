/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FreshserviceCredentialsUpdate } from "./FreshserviceCredentialsUpdate";
import { FreshserviceIntegrationType } from "./FreshserviceIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `FreshserviceIntegrationUpdate` object.
*/
export class FreshserviceIntegrationUpdate {
  /**
   * The definition of the `FreshserviceCredentialsUpdate` object.
  */
  "credentials"?: FreshserviceCredentialsUpdate;
  /**
   * The definition of the `FreshserviceIntegrationType` object.
  */
  "type": FreshserviceIntegrationType;

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
    "credentials": {
      "baseName": "credentials",
      "type": "FreshserviceCredentialsUpdate",
    },
    "type": {
      "baseName": "type",
      "type": "FreshserviceIntegrationType",
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




    return FreshserviceIntegrationUpdate.attributeTypeMap;

  }

  public constructor() {











  }
}









