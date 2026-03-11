/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An object containing metadata flags for a service, indicating whether it is traced by APM or monitored via Universal Service Monitoring.
 */
export class ServiceListDataAttributesMetadataItems {
  /**
   * Indicates whether the service is traced by APM.
   */
  "isTraced"?: boolean;
  /**
   * Indicates whether the service uses Universal Service Monitoring.
   */
  "isUsm"?: boolean;

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
    isTraced: {
      baseName: "isTraced",
      type: "boolean",
    },
    isUsm: {
      baseName: "isUsm",
      type: "boolean",
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
    return ServiceListDataAttributesMetadataItems.attributeTypeMap;
  }

  public constructor() {}
}
