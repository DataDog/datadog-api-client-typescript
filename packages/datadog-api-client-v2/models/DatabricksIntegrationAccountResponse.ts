/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountResponseData } from "./DatabricksIntegrationAccountResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response payload for a single Databricks integration account.
 */
export class DatabricksIntegrationAccountResponse {
  /**
   * Data envelope of a Databricks integration account, including server-assigned identity.
   */
  "data": DatabricksIntegrationAccountResponseData;

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
      type: "DatabricksIntegrationAccountResponseData",
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
    return DatabricksIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
