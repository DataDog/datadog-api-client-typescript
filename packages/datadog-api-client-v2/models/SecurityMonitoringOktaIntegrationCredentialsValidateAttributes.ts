/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringIntegrationConfigOktaSecrets } from "./SecurityMonitoringIntegrationConfigOktaSecrets";
import { SecurityMonitoringIntegrationTypeOkta } from "./SecurityMonitoringIntegrationTypeOkta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The Okta credentials to validate against the external entity source.
*/
export class SecurityMonitoringOktaIntegrationCredentialsValidateAttributes {
  /**
   * The domain associated with the external entity source.
  */
  "domain": string;
  /**
   * The source type for an Okta entity context sync.
  */
  "integrationType": SecurityMonitoringIntegrationTypeOkta;
  /**
   * Credentials for an Okta entity context sync.
  */
  "secrets": SecurityMonitoringIntegrationConfigOktaSecrets;

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
    "domain": {
      "baseName": "domain",
      "type": "string",
      "required": true,
    },
    "integrationType": {
      "baseName": "integration_type",
      "type": "SecurityMonitoringIntegrationTypeOkta",
      "required": true,
    },
    "secrets": {
      "baseName": "secrets",
      "type": "SecurityMonitoringIntegrationConfigOktaSecrets",
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




    return SecurityMonitoringOktaIntegrationCredentialsValidateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









