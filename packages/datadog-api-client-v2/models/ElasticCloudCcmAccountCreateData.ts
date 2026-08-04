/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudCcmAccountAttributes } from "./ElasticCloudCcmAccountAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for creating an Elastic Cloud CCM account.
 */
export class ElasticCloudCcmAccountCreateData {
  /**
   * Attributes of an Elastic Cloud CCM (Cloud Cost Management) account. The configuration is hoisted directly onto the attributes; there is no interface wrapper because the `elastic-cloud-ccm` interface is fixed by the endpoint path.
   */
  "attributes": ElasticCloudCcmAccountAttributes;
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
      type: "ElasticCloudCcmAccountAttributes",
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
    return ElasticCloudCcmAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
