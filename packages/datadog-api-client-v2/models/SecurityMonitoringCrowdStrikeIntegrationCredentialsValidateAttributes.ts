/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringIntegrationConfigCrowdStrikeSecrets } from "./SecurityMonitoringIntegrationConfigCrowdStrikeSecrets";
import { SecurityMonitoringIntegrationTypeCrowdStrike } from "./SecurityMonitoringIntegrationTypeCrowdStrike";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The CrowdStrike credentials to validate against the external entity source.
*/
export class SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes {
  /**
   * The domain associated with the external entity source.
  */
  "domain": string;
  /**
   * The source type for a CrowdStrike entity context sync.
  */
  "integrationType": SecurityMonitoringIntegrationTypeCrowdStrike;
  /**
   * Credentials for a CrowdStrike entity context sync.
  */
  "secrets": SecurityMonitoringIntegrationConfigCrowdStrikeSecrets;

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
      "type": "SecurityMonitoringIntegrationTypeCrowdStrike",
      "required": true,
    },
    "secrets": {
      "baseName": "secrets",
      "type": "SecurityMonitoringIntegrationConfigCrowdStrikeSecrets",
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




    return SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









