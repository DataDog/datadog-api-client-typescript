/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudIntegrationAccountCreateAttributes } from "./ElasticCloudIntegrationAccountCreateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for creating an Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountCreateData {
  /**
   * Writable attributes used to create an Elastic Cloud integration account.
   */
  "attributes": ElasticCloudIntegrationAccountCreateAttributes;
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
      type: "ElasticCloudIntegrationAccountCreateAttributes",
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
    return ElasticCloudIntegrationAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
