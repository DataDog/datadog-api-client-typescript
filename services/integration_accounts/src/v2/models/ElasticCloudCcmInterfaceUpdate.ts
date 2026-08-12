import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAuthentication } from "./ElasticCloudCcmAuthentication";
import { ElasticCloudCcmDataflow } from "./ElasticCloudCcmDataflow";
import { ElasticCloudCcmInterfaceType } from "./ElasticCloudCcmInterfaceType";
import { ElasticCloudCcmSettingsUpdate } from "./ElasticCloudCcmSettingsUpdate";

/**
 * Partial Elastic Cloud CCM interface for updates.
 */
export class ElasticCloudCcmInterfaceUpdate {
  /**
   * Authentication methods supported by the Elastic Cloud CCM interface. Exactly one is set, selected by its `type`.
   */
  "authentication"?: ElasticCloudCcmAuthentication;
  /**
   * Dataflows for the Elastic Cloud CCM interface.
   */
  "dataflows"?: Array<ElasticCloudCcmDataflow>;
  /**
   * Partial Elastic Cloud CCM interface settings for updates.
   */
  "settings"?: ElasticCloudCcmSettingsUpdate;
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
    },
    dataflows: {
      baseName: "dataflows",
      type: "Array<ElasticCloudCcmDataflow>",
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudCcmSettingsUpdate",
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
    return ElasticCloudCcmInterfaceUpdate.attributeTypeMap;
  }

  public constructor() {}
}
