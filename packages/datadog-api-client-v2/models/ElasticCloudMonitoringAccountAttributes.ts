/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudAuthentication } from "./ElasticCloudAuthentication";
import { ElasticCloudDataflow } from "./ElasticCloudDataflow";
import { ElasticCloudSettings } from "./ElasticCloudSettings";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an Elastic Cloud monitoring account. The configuration is hoisted directly onto the attributes; there is no interface wrapper because the `elastic-cloud` interface is fixed by the endpoint path.
 */
export class ElasticCloudMonitoringAccountAttributes {
  /**
   * Authentication methods supported by the Elastic Cloud monitoring interface. Exactly one is set, selected by its `type`.
   */
  "authentication": ElasticCloudAuthentication;
  /**
   * Dataflows for the Elastic Cloud monitoring interface.
   */
  "dataflows"?: Array<ElasticCloudDataflow>;
  /**
   * Human-readable name of the account.
   */
  "name": string;
  /**
   * Read-only permission information for the account, derived from its restriction policy.
   */
  "permissions"?: IntegrationAccountPermissions;
  /**
   * Elastic Cloud monitoring interface settings.
   */
  "settings"?: ElasticCloudSettings;

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
      type: "ElasticCloudAuthentication",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "Array<ElasticCloudDataflow>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    permissions: {
      baseName: "permissions",
      type: "IntegrationAccountPermissions",
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudSettings",
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
    return ElasticCloudMonitoringAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
