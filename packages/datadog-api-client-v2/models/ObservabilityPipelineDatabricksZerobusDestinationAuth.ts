/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * OAuth credentials for authenticating with the Databricks Zerobus ingestion API.
 */
export class ObservabilityPipelineDatabricksZerobusDestinationAuth {
  /**
   * Your service principal application ID (UUID).
   */
  "clientId": string;
  /**
   * Name of the environment variable or secret that holds the OAuth client secret used to authenticate with the Databricks ingestion endpoint.
   */
  "clientSecretKey"?: string;

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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    clientSecretKey: {
      baseName: "client_secret_key",
      type: "string",
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
    return ObservabilityPipelineDatabricksZerobusDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
