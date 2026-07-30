/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudAuthentication } from "./ElasticCloudAuthentication";
import { ElasticCloudDataflow } from "./ElasticCloudDataflow";
import { ElasticCloudSettingsUpdate } from "./ElasticCloudSettingsUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updatable attributes of an Elastic Cloud monitoring account. Every field is optional; only the fields provided are changed.
 */
export class ElasticCloudMonitoringAccountUpdateAttributes {
  /**
   * Authentication methods supported by the Elastic Cloud monitoring interface. Exactly one is set, selected by its `type`.
   */
  "authentication"?: ElasticCloudAuthentication;
  /**
   * Dataflows for the Elastic Cloud monitoring interface.
   */
  "dataflows"?: Array<ElasticCloudDataflow>;
  /**
   * Human-readable name of the account.
   */
  "name"?: string;
  /**
   * Partial Elastic Cloud monitoring interface settings for updates.
   */
  "settings"?: ElasticCloudSettingsUpdate;

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
    },
    dataflows: {
      baseName: "dataflows",
      type: "Array<ElasticCloudDataflow>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudSettingsUpdate",
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
    return ElasticCloudMonitoringAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
