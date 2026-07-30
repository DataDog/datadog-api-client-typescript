import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudAuthentication } from "./ElasticCloudAuthentication";
import { ElasticCloudDataflow } from "./ElasticCloudDataflow";
import { ElasticCloudMonitoringInterfaceType } from "./ElasticCloudMonitoringInterfaceType";
import { ElasticCloudSettings } from "./ElasticCloudSettings";

/**
 * Elastic Cloud monitoring interface (source-type) configuration.
 */
export class ElasticCloudMonitoringInterface {
  /**
   * Authentication methods supported by the Elastic Cloud interface. Exactly one is set, selected by its `type`.
   */
  "authentication": ElasticCloudAuthentication;
  /**
   * Dataflows for the Elastic Cloud monitoring interface.
   */
  "dataflows"?: Array<ElasticCloudDataflow>;
  /**
   * Elastic Cloud interface settings.
   */
  "settings"?: ElasticCloudSettings;
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
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "Array<ElasticCloudDataflow>",
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudSettings",
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
    return ElasticCloudMonitoringInterface.attributeTypeMap;
  }

  public constructor() {}
}
