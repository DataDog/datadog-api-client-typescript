/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudCcmAuthentication } from "./ElasticCloudCcmAuthentication";
import { ElasticCloudCcmDataflow } from "./ElasticCloudCcmDataflow";
import { ElasticCloudCcmSettingsUpdate } from "./ElasticCloudCcmSettingsUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updatable attributes of an Elastic Cloud CCM account. Every field is optional; only the fields provided are changed.
 */
export class ElasticCloudCcmAccountUpdateAttributes {
  /**
   * Authentication methods supported by the Elastic Cloud CCM interface. Exactly one is set, selected by its `type`.
   */
  "authentication"?: ElasticCloudCcmAuthentication;
  /**
   * Dataflows for the Elastic Cloud CCM interface.
   */
  "dataflows"?: Array<ElasticCloudCcmDataflow>;
  /**
   * Human-readable name of the account.
   */
  "name"?: string;
  /**
   * Partial Elastic Cloud CCM interface settings for updates.
   */
  "settings"?: ElasticCloudCcmSettingsUpdate;

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
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "ElasticCloudCcmSettingsUpdate",
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
    return ElasticCloudCcmAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
