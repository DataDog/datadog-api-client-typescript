/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceNowCredentialsUpdate } from "./ServiceNowCredentialsUpdate";
import { ServiceNowIntegrationType } from "./ServiceNowIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `ServiceNowIntegrationUpdate` object.
 */
export class ServiceNowIntegrationUpdate {
  /**
   * The definition of the `ServiceNowCredentialsUpdate` object.
   */
  "credentials"?: ServiceNowCredentialsUpdate;
  /**
   * The definition of the `ServiceNowIntegrationType` object.
   */
  "type": ServiceNowIntegrationType;

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
    credentials: {
      baseName: "credentials",
      type: "ServiceNowCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "ServiceNowIntegrationType",
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
    return ServiceNowIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
