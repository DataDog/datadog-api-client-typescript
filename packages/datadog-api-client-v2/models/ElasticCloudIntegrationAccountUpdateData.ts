/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudIntegrationAccountUpdateAttributes } from "./ElasticCloudIntegrationAccountUpdateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for updating an Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountUpdateData {
  /**
   * Updatable attributes of an Elastic Cloud integration account. Every field is optional; only the fields provided are changed.
   */
  "attributes": ElasticCloudIntegrationAccountUpdateAttributes;
  /**
   * JSON:API resource type for an integration account. Always `integration-account`.
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
      type: "ElasticCloudIntegrationAccountUpdateAttributes",
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
    return ElasticCloudIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
