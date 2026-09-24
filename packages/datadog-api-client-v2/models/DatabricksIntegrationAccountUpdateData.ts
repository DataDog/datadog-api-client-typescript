/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountUpdateAttributes } from "./DatabricksIntegrationAccountUpdateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for updating a Databricks integration account.
 */
export class DatabricksIntegrationAccountUpdateData {
  /**
   * Writable attributes used to update a Databricks integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration, as do the settings of an included dataflow that provides only `enabled`.
   */
  "attributes": DatabricksIntegrationAccountUpdateAttributes;
  /**
   * Unique identifier of the Databricks integration account to update.
   */
  "id": string;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;

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
    attributes: {
      baseName: "attributes",
      type: "DatabricksIntegrationAccountUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return DatabricksIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
