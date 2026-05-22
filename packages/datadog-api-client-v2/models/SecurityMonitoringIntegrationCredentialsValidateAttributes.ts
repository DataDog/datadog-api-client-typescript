/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringIntegrationType } from "./SecurityMonitoringIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The credentials to validate against the external entity source.
 */
export class SecurityMonitoringIntegrationCredentialsValidateAttributes {
  /**
   * The domain associated with the external entity source.
   */
  "domain": string;
  /**
   * The type of external source that provides entities to Cloud SIEM.
   */
  "integrationType": SecurityMonitoringIntegrationType;
  /**
   * The secrets used to authenticate against the external entity source. The accepted keys depend on the source type (for example, `admin_email` for Google Workspace).
   */
  "secrets": { [key: string]: any };

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
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
    },
    integrationType: {
      baseName: "integration_type",
      type: "SecurityMonitoringIntegrationType",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "{ [key: string]: any; }",
      required: true,
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
    return SecurityMonitoringIntegrationCredentialsValidateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
