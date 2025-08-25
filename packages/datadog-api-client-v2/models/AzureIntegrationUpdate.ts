/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureCredentialsUpdate } from "./AzureCredentialsUpdate";
import { AzureIntegrationType } from "./AzureIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `AzureIntegrationUpdate` object.
 */
export class AzureIntegrationUpdate {
  /**
   * The definition of the `AzureCredentialsUpdate` object.
   */
  "credentials"?: AzureCredentialsUpdate;
  /**
   * The definition of the `AzureIntegrationType` object.
   */
  "type": AzureIntegrationType;

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
      type: "AzureCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "AzureIntegrationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
