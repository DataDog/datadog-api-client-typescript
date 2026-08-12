import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAuthentication } from "./ElasticCloudCcmAuthentication";
import { ElasticCloudCcmDataflow } from "./ElasticCloudCcmDataflow";
import { ElasticCloudCcmSettings } from "./ElasticCloudCcmSettings";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";

/**
 * Attributes of an Elastic Cloud CCM (Cloud Cost Management) account. The configuration is hoisted directly onto the attributes; there is no interface wrapper because the `elastic-cloud-ccm` interface is fixed by the endpoint path.
 */
export class ElasticCloudCcmAccountAttributes {
  /**
   * Authentication methods supported by the Elastic Cloud CCM interface. Exactly one is set, selected by its `type`.
   */
  "authentication": ElasticCloudCcmAuthentication;
  /**
   * Dataflows for the Elastic Cloud CCM interface.
   */
  "dataflows"?: Array<ElasticCloudCcmDataflow>;
  /**
   * Human-readable name of the account.
   */
  "name": string;
  /**
   * Read-only permission information for the account, derived from its restriction policy.
   */
  "permissions"?: IntegrationAccountPermissions;
  /**
   * Elastic Cloud CCM interface settings.
   */
  "settings"?: ElasticCloudCcmSettings;
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
      type: "ElasticCloudCcmSettings",
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
    return ElasticCloudCcmAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
