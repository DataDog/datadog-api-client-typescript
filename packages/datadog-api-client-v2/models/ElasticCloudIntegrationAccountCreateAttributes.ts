/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudIntegrationAccountAuthenticationRequest } from "./ElasticCloudIntegrationAccountAuthenticationRequest";
import { ElasticCloudIntegrationAccountSettingsRequest } from "./ElasticCloudIntegrationAccountSettingsRequest";
import { ElasticCloudIntegrationDataflowsRequest } from "./ElasticCloudIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to create an Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the Elastic Cloud integration account. Exactly one method is set.
   */
  "authentication": ElasticCloudIntegrationAccountAuthenticationRequest;
  /**
   * Dataflows to configure on the Elastic Cloud integration account, keyed by dataflow id.
   */
  "dataflows"?: ElasticCloudIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Elastic Cloud integration account.
   */
  "name": string;
  /**
   * Settings for creating the Elastic Cloud integration account.
   */
  "settings": ElasticCloudIntegrationAccountSettingsRequest;

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
      type: "ElasticCloudIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "ElasticCloudIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudIntegrationAccountSettingsRequest",
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
    return ElasticCloudIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
