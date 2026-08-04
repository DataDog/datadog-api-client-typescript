import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAuthentication } from "./ElasticCloudCcmAuthentication";
import { ElasticCloudCcmDataflow } from "./ElasticCloudCcmDataflow";
import { ElasticCloudCcmInterfaceType } from "./ElasticCloudCcmInterfaceType";
import { ElasticCloudCcmSettings } from "./ElasticCloudCcmSettings";

/**
 * Elastic Cloud CCM (Cloud Cost Management) interface configuration.
 */
export class ElasticCloudCcmInterface {
  /**
   * Authentication methods supported by the Elastic Cloud CCM interface. Exactly one is set, selected by its `type`.
   */
  "authentication": ElasticCloudCcmAuthentication;
  /**
   * Dataflows for the Elastic Cloud CCM interface.
   */
  "dataflows"?: Array<ElasticCloudCcmDataflow>;
  /**
   * Elastic Cloud CCM interface settings.
   */
  "settings"?: ElasticCloudCcmSettings;
  /**
   * Interface discriminator for the Elastic Cloud CCM interface.
   */
  "type": ElasticCloudCcmInterfaceType;
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
      type: "ElasticCloudCcmAuthentication",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "Array<ElasticCloudCcmDataflow>",
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudCcmSettings",
    },
    type: {
      baseName: "type",
      type: "ElasticCloudCcmInterfaceType",
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
    return ElasticCloudCcmInterface.attributeTypeMap;
  }

  public constructor() {}
}
