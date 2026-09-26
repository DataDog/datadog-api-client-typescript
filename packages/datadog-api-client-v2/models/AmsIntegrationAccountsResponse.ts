/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AmsIntegrationAccountResponseData } from "./AmsIntegrationAccountResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of web integration accounts.
 */
export class AmsIntegrationAccountsResponse {
  "data"?: Array<AmsIntegrationAccountResponseData>;
  /**
   * The name of the integration.
   */
  "integrationName"?: string;

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
    data: {
      baseName: "data",
      type: "Array<AmsIntegrationAccountResponseData>",
    },
    integrationName: {
      baseName: "integration_name",
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
    return AmsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
