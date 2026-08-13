/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudAuthentication } from "./ElasticCloudAuthentication";
import { ElasticCloudDataflow } from "./ElasticCloudDataflow";
import { ElasticCloudMonitoringInterfaceType } from "./ElasticCloudMonitoringInterfaceType";
import { ElasticCloudSettingsUpdate } from "./ElasticCloudSettingsUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Partial Elastic Cloud monitoring interface for updates.
 */
export class ElasticCloudMonitoringInterfaceUpdate {
  /**
   * Authentication methods supported by the Elastic Cloud interface. Exactly one is set, selected by its `type`.
   */
  "authentication"?: ElasticCloudAuthentication;
  /**
   * Dataflows for the Elastic Cloud monitoring interface.
   */
  "dataflows"?: Array<ElasticCloudDataflow>;
  /**
   * Partial Elastic Cloud interface settings for updates.
   */
  "settings"?: ElasticCloudSettingsUpdate;
  /**
   * Interface discriminator for the Elastic Cloud monitoring interface.
   */
  "type": ElasticCloudMonitoringInterfaceType;

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
    settings: {
      baseName: "settings",
      type: "ElasticCloudSettingsUpdate",
    },
    type: {
      baseName: "type",
      type: "ElasticCloudMonitoringInterfaceType",
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
    return ElasticCloudMonitoringInterfaceUpdate.attributeTypeMap;
  }

  public constructor() {}
}
