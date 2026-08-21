/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudIntegrationAccountAuthenticationResponse } from "./ElasticCloudIntegrationAccountAuthenticationResponse";
import { ElasticCloudIntegrationAccountSettingsResponse } from "./ElasticCloudIntegrationAccountSettingsResponse";
import { ElasticCloudIntegrationDataflowsResponse } from "./ElasticCloudIntegrationDataflowsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an Elastic Cloud integration account returned in responses.
 */
export class ElasticCloudIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Elastic Cloud integration account.
   */
  "authentication"?: ElasticCloudIntegrationAccountAuthenticationResponse;
  /**
   * Dataflows configured on the Elastic Cloud integration account, keyed by dataflow id.
   */
  "dataflows"?: ElasticCloudIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Elastic Cloud integration account.
   */
  "name": string;
  /**
   * Settings configured on the Elastic Cloud integration account.
   */
  "settings": ElasticCloudIntegrationAccountSettingsResponse;

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
    authentication: {
      baseName: "authentication",
      type: "ElasticCloudIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "ElasticCloudIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudIntegrationAccountSettingsResponse",
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
    return ElasticCloudIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
